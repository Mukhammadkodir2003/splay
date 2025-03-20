-- CreateTable
CREATE TABLE "audio_track" (
    "id" SERIAL NOT NULL,
    "langId" INTEGER NOT NULL,
    "audioId" INTEGER NOT NULL,
    "file_size" INTEGER NOT NULL,
    "duration" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "audio_track_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "content_audio" (
    "id" SERIAL NOT NULL,
    "audioTrackId" INTEGER NOT NULL,
    "contentId" INTEGER NOT NULL,
    "is_main" BOOLEAN NOT NULL,

    CONSTRAINT "content_audio_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "content_audio_audioTrackId_contentId_key" ON "content_audio"("audioTrackId", "contentId");

-- AddForeignKey
ALTER TABLE "episode_audio" ADD CONSTRAINT "episode_audio_audio_track_id_fkey" FOREIGN KEY ("audio_track_id") REFERENCES "audio_track"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "audio_track" ADD CONSTRAINT "audio_track_langId_fkey" FOREIGN KEY ("langId") REFERENCES "language"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "content_audio" ADD CONSTRAINT "content_audio_audioTrackId_fkey" FOREIGN KEY ("audioTrackId") REFERENCES "audio_track"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "content_audio" ADD CONSTRAINT "content_audio_contentId_fkey" FOREIGN KEY ("contentId") REFERENCES "content"("id") ON DELETE CASCADE ON UPDATE CASCADE;
