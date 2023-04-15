## $whatis ministry-of-truth

Program that puts masks on faces in images and video.
Code can be found on [Github](https://github.com/iaquobe/ministry-of-truth)

### how it works
This Project may look impressive, but its actually just a 70 line Python script.
Its using a face recognition library, to get rectangles where there are faces.
Then, using Pillow, a mask image is layered over the face.

Additionally there is some file type parsing, so even video can masked.
Video however is very slow, since the face recognition library is called every
few frames.
