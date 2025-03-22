export const backendUrl: string =
  (import.meta.env.VITE_BACKEND_URL as string) ?? "http://localhost:8000";

export const generateSessionEndpoint = `/session/generate/`;
export const generateVoiceEndpoint = `/session/generate-voice/`;
export const charactersEndpoint = `/characters/`;
export const pdfEndpoint = `/session/upload-pdf/`;
