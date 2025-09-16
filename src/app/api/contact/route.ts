import { NextRequest, NextResponse } from 'next/server'
import { createGoogleSheetsIntegration, ContactFormData } from '@/lib/google-sheets'

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()
    
    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Log the form data
    console.log('Contact form submission:', {
      timestamp: new Date().toISOString(),
      ...body
    })

    // Try to save to Google Sheets
    const googleSheets = createGoogleSheetsIntegration()
    
    if (googleSheets) {
      try {
        await googleSheets.addContactSubmission(body)
        console.log('Successfully saved contact submission to Google Sheets')
      } catch (sheetsError) {
        console.error('Failed to save to Google Sheets:', sheetsError)
        // Continue anyway - we don't want to fail the entire request if Google Sheets is down
      }
    } else {
      console.warn('Google Sheets integration not configured - form data only logged to console')
    }

    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}