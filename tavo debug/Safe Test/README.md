# Sola V5 Tavo Safe Test

Tester-only, standalone regex ZIPs. Keep your current Tavo preset. Only one Sola regex pack should be active at a time, including the probe. These are not updates to the regular downloads.

| Test | Full | Lite |
| --- | --- | --- |
| Spans: shorter display scans, no depth changes | [Full](Sola%20V5%20Full%20-%20Tavo%20Safe%20Spans.zip) | [Lite](Sola%20V5%20Lite%20-%20Tavo%20Safe%20Spans.zip) |
| History: same span limits, rich formatting only within `maxDepth: 2` if Tavo honors it | [Full](Sola%20V5%20Full%20-%20Tavo%20Safe%20History.zip) | [Lite](Sola%20V5%20Lite%20-%20Tavo%20Safe%20History.zip) |
| Static: plain tracker text, no rich cards or animations at any depth | [Full](Sola%20V5%20Full%20-%20Tavo%20Safe%20Static.zip) | [Lite](Sola%20V5%20Lite%20-%20Tavo%20Safe%20Static.zip) |

[Depth Probe (both tiers)](Sola%20V5%20-%20Tavo%20Depth%20Probe.zip)

## Test on the affected device

1. Back up or export the affected chat if you can. Disable all Sola regex packs and try opening that same chat. If it still won't open or doesn't appear in the list, stop here and report that. Don't delete the chat or clear app data.
2. On that same chat, try the [earlier span-cap control](https://github.com/Pyrxpia/sola-hub/tree/main/tavo%20debug) for your tier, then Safe Spans. Disable the previous pack between tests. Record whether it opens and roughly how long it takes to show text.
3. In a short disposable chat with only the Depth Probe enabled, have two assistant replies contain the exact token `TAVODEPTHCHECK`: one old reply and one newest reply, with at least five messages in between. Ask the model to echo the token or edit the disposable assistant replies if your app allows it. Reopen the chat. The old assistant marker should still display as `TAVODEPTHCHECK`, and the newest should display as `[TAVO DEPTH MATCH]`. If both transform, neither transforms, or only user-message depth was tested, the probe hasn't confirmed assistant-message depth support. Report what you saw.
4. If the probe passes, try Safe History on the same long chat. Compare recent and older Heart or Easel entries: recent entries should render as cards; older entries should show their text without the card artwork. If the probe fails, try Safe Static instead. Static is also useful if the rich variants still hang.
5. Report your Tavo version, device/OS, Full or Lite, and which tests loaded. Say whether the chat was missing from the list, spun on open, opened with wrong formatting, or only lagged while scrolling or streaming. A screenshot or a redacted raw message with tags and line breaks intact is useful.

The Board is plain text in all Safe variants so a cutoff can't hide its rows. Safe Spans and Safe History keep the Heart and Easel formatting from the previous test and disable two Marginalia rules that could hide unfinished notes. Oversized or malformed blocks may show text or raw tags rather than a formatted card. Safe Static uses five simple display rules and doesn't depend on depth support. Prompt-side rules are unchanged. Local ZIP and regex replays passed; behavior in the Tavo app is still unverified.
