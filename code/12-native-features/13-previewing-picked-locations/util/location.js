const GOOGLE_API_KEY = 'AIzaSyCTCDNDtYPCpAD0FaKgHgdzCjMN1QUHnt4';

export function getMapPreview(lat, lng) {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API_KEY}`;
  return imagePreviewUrl;
}
