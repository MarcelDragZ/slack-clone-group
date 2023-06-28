import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from '@angular/fire/storage';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent implements OnInit {
  imageUrl: string | null = null;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    // Beim Initialisieren der Komponente die gespeicherte URL aus dem Local Storage abrufen
    this.imageUrl = localStorage.getItem('imageUrl');
    console.log(this.imageUrl);

  }

  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    if (file) {
      const filePath = `avatars/${file.name}`; // Pfad, unter dem du das Bild speichern möchtest
      const storageRef = ref(getStorage(), filePath);

      // Datei hochladen
      const uploadTask = uploadBytesResumable(storageRef, file);

      // Beobachte den Fortschritt des Hochladens
      uploadTask.on('state_changed', snapshot => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
      }, error => {
        console.error('Upload failed:', error);
      }, async () => {
        // Nach erfolgreichem Hochladen die Download-URL abrufen
        console.log('Upload complete!');
        this.imageUrl = await getDownloadURL(storageRef);
        // Download-URL im Local Storage speichern
        localStorage.setItem('imageUrl', this.imageUrl);
        this.cd.detectChanges();
      });
    }
  }
}
