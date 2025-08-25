import { NextRequest, NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';

export async function GET(request: NextRequest) {
  try {
    // Path to the resume PDF in the public directory
    const resumePath = join(process.cwd(), 'public', 'Arjun_Govindan_SDE_2_May_2025.pdf');
    
    // Read the file
    const fileBuffer = readFileSync(resumePath);
    
    // Return the PDF with proper headers
    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Arjun_Govindan_Resume.pdf"',
        'Content-Length': fileBuffer.length.toString(),
        'Cache-Control': 'no-cache',
      },
    });
  } catch (error) {
    console.error('Error serving resume:', error);
    return NextResponse.json(
      { error: 'Failed to serve resume' },
      { status: 500 }
    );
  }
}
