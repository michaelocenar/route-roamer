import jsPDF from "jspdf";


export const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

export const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

export const googleMapsLibraries = ["places"];


export function parseItinerary(itineraryText) {
  const itineraryData = JSON.parse(itineraryText);
  return itineraryData.Itinerary;
}

export const getPlaceId = (lat, lng) => {
  const geocoder = new window.google.maps.Geocoder();
  const latlng = new window.google.maps.LatLng(lat, lng);
  return new Promise((resolve, reject) => {
    geocoder.geocode({ location: latlng }, (results, status) => {
      if (status === "OK") {
        if (results[0]) {
          resolve(results[0].place_id);
        } else {
          reject("No results found");
        }
      } else {
        reject(`Geocoder failed due to: ${status}`);
      }
    });
  });
};

export const downloadPDF = () => {
  const itineraryElement = document.getElementById("itineraryContent");
  const text = itineraryElement.innerText.split("\n");

  const pdf = new jsPDF("p", "pt", "a4");
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const margin = 40;
  const lineHeight = 20;
  const maxLineWidth = pageWidth - 2 * margin;

  let y = margin;

  const unwantedWords = [
    "Map",
    "Satellite",
    "Keyboard shortcuts",
    "Terms of Use",
    "Download Itinerary as PDF",
    "Get Directions",
    "report a map error",
    "Report a map error"
  ];

  const filteredText = text.filter(
    (line) => !unwantedWords.some((word) => line.includes(word))
  );

  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(20);
  const headerText = "Your Itinerary";
  const headerWidth = pdf.getStringUnitWidth(headerText) * pdf.getFontSize();
  pdf.text(headerText, (pageWidth - headerWidth) / 2, y);
  y += lineHeight * 2; 

  for (const line of filteredText) {
    if (y > pageHeight - margin) {
      pdf.addPage();
      y = margin;
    }

    const formattedLine = line.replace(/(\d{2}:\d{2}):/g, "$1: ");

    if (formattedLine.startsWith("Day")) {
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(16);
      y += lineHeight;
    } else if (formattedLine.endsWith(":")) {
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(12);
    } else {
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(12);
    }

    const splitLines = pdf.splitTextToSize(formattedLine, maxLineWidth);

    for (const splitLine of splitLines) {
      pdf.text(splitLine, margin, y);
      y += lineHeight;
    }
  }

  const currentDate = new Date();
  const fileName = `itinerary_${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}.pdf`;
  pdf.save(fileName);
};
