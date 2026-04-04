"use client";
import { useState } from "react";

export default function UploadPage() {
  const [urls, setUrls] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files || []);
    setUploading(true);
    const results: string[] = [];
    for (const file of files) {
      const form = new FormData();
      form.append("file", file);
      const res = await fetch("/api/upload", { method: "POST", body: form });
      const data = await res.json();
      results.push(`{ src: "${data.url}", label: "${file.name.replace(".mp4","")}", category: "Field Documentation" }`);
    }
    setUrls(results);
    setUploading(false);
  }

  return (
    <div style={{ padding: "2rem", fontFamily: "monospace" }}>
      <h2>Upload Videos to Vercel Blob</h2>
      <input type="file" accept="video/*" multiple onChange={handleUpload} />
      {uploading && <p>Uploading... please wait ⏳</p>}
      {urls.length > 0 && (
        <div>
          <h3>Copy these into your videos page:</h3>
          <pre style={{ background: "#111", color: "#0f0", padding: "1rem", borderRadius: "8px", overflowX: "auto" }}>
            {urls.join("\n")}
          </pre>
        </div>
      )}
    </div>
  );
}