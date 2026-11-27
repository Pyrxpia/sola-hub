# Sola V5 Tavo debug packs

These are standalone Tavo regex ZIPs for testing, not presets or updates to the regular downloads. Use the same tier you already use, and keep only one Sola regex pack active at a time.

| Tier | Formatting test | Earlier span-cap control |
| --- | --- | --- |
| Full | [Full formatting test](Sola%20V5%20Full%20-%20Tavo%20Formatting%20Test.zip) | [Full control](diag_15_bounded_spans_full.zip) |
| Lite | [Lite formatting test](Sola%20V5%20Lite%20-%20Tavo%20Formatting%20Test.zip) | [Lite control](diag_16_bounded_spans_lite.zip) |

The formatting test restores the four Heart Engine panels and the Easel status, Escalation, and Pacing Gear chips. It has been checked in Node and Chromium, not on an affected Tavo device. It is not a confirmed fix for missing chats or infinite loading.

## Test on the affected device and chat

1. Back up or export the chat if possible. Disable or remove the Sola **regex pack** (not the preset or chat) and try to open the same chat. If it still won't open, stop swapping packs. Don't delete the chat or clear app data.
2. Try the matching span-cap control on that same chat, then try the matching formatting test. Remove or disable the previous pack between tests. The control helped a different affected tester; it may not fix this case.
3. On a short chat, check that a Heart Engine block with Ego, Nerve, Body, and Psyche shows four panels.
4. Report your Tavo version, device, and which packs loaded. Note whether the chat is missing from the list or still listed but spins on open. If you can share a redacted message, preserve the tags and line breaks.
