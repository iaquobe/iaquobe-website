## $whatis spotigrep

A program that allows greping Spotify.
You can also specify requirements, like its from this artist or found in this
playlist. 
The [code is on Github](https://github.com/iaquobe/spotigrep) in case you want
to check it out

### how it works
Playlist can be downloaded, which creates a subdirectory for this playlist with
directories for each artist found in that playlist.
Those artist subfolders contain plain text lyrics.

The lyrics are populated using the genius api.
This process is pretty slow, since one of those APIs is slow.
Once a playlist is generated though, you can grep as many times as you like.


