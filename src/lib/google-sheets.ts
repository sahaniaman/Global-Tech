// Google Sheets Integration Helper
import { GoogleSpreadsheet } from 'google-spreadsheet'
import { JWT } from 'google-auth-library'

export interface ContactFormData {
  name: string
  email: string  
  company: string
  message: string
}

export interface GoogleSheetsConfig {
  spreadsheetId: string
  sheetName: string
  clientEmail: string
  privateKey: string
}

export class GoogleSheetsIntegration {
  private config: GoogleSheetsConfig

  constructor(config: GoogleSheetsConfig) {
    this.config = config
  }

  async addContactSubmission(data: ContactFormData): Promise<void> {
    try {
      console.log('Adding contact submission to Google Sheets...')
      
      const serviceAccountAuth = new JWT({
        email: this.config.clientEmail,
        key: this.config.privateKey.replace(/\\n/g, '\n'),
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      })
      
      const doc = new GoogleSpreadsheet(this.config.spreadsheetId, serviceAccountAuth)
      await doc.loadInfo()
      
      let sheet = doc.sheetsByTitle[this.config.sheetName]
      
      if (!sheet) {
        // Create new sheet with headers
        console.log('Creating new sheet with headers...')
        sheet = await doc.addSheet({ 
          title: this.config.sheetName,
          headerValues: ['Timestamp', 'Name', 'Email', 'Company', 'Message']
        })
      } else {
        // Ensure sheet has data
        await sheet.loadCells('A1:E1') // Load the first row
        
        // Check if the first row has any content
        const hasHeaders = sheet.getCell(0, 0).value || 
                          sheet.getCell(0, 1).value || 
                          sheet.getCell(0, 2).value || 
                          sheet.getCell(0, 3).value || 
                          sheet.getCell(0, 4).value
        
        if (!hasHeaders) {
          // Set headers if first row is empty
          console.log('Setting headers for existing sheet...')
          await sheet.setHeaderRow(['Timestamp', 'Name', 'Email', 'Company', 'Message'])
        } else {
          // Load existing headers
          await sheet.loadHeaderRow()
        }
      }
      
      await sheet.addRow({
        Timestamp: new Date().toISOString(),
        Name: data.name,
        Email: data.email,
        Company: data.company,
        Message: data.message,
      })
      
      console.log('Successfully added contact submission to Google Sheets')
    } catch (error) {
      console.error('Google Sheets integration error:', error)
      throw new Error('Failed to save contact submission to Google Sheets')
    }
  }
}

export function createGoogleSheetsIntegration(): GoogleSheetsIntegration | null {
  const requiredEnvVars = [
    'GOOGLE_SHEETS_ID',
    'GOOGLE_SHEETS_SHEET_NAME', 
    'GOOGLE_SERVICE_ACCOUNT_EMAIL',
    'GOOGLE_PRIVATE_KEY'
  ]

  const missingVars = requiredEnvVars.filter(varName => !process.env[varName])
  
  if (missingVars.length > 0) {
    console.warn('Google Sheets integration disabled. Missing environment variables:', missingVars)
    return null
  }

  return new GoogleSheetsIntegration({
    spreadsheetId: process.env.GOOGLE_SHEETS_ID!,
    sheetName: process.env.GOOGLE_SHEETS_SHEET_NAME!,
    clientEmail: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL!,
    privateKey: process.env.GOOGLE_PRIVATE_KEY!
  })
}
