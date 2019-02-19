# [TeamDynamix](http://teamdynamix.com), we have to talk

Sure, we like the way you can do workorders and assign them to groups. The emails are nice. Compared to lots of other ticketing products out there, you give a lot of bang for the buck.

But scooch over here, and let's just go to **Developer** and **View Source**. 😨

We've used your product for years, and still it insists on trapping navigation in iFrames, and popping every single interaction into another browser window.

So I wrote this Chrome Extension. To deal with your problems.

## How to install

I haven't published this to the Chrome Store yet, so until then:

- Use the **Clone or download** button above to download the file.
- Unarchive the file.
- Go to `chrome://extensions`.
- Toggle the **Developer mode** toggle above.
- Click **Load unpacked** and select the _folder_ `teamdynamix-usability` you just unzipped.

## What it fixes

_Note:_ the extension **does not** do anything to the administrator interface.

- [x] (Tries to) prevent popup windows from appearing when clicking a link or button
- [ ] Tracks history in the browser's native URL so you can copy-paste to things like tickets, etc.
- [ ] Makes search actually search for things
- [ ] Reorder the ticket view so important details are on top
