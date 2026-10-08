# BCS613A — Textbook Notes

**Subject:** BCS613A (Mobile Application Development)
**Content type:** textbook_notes
**Primary Reference:** Jochen Schiller — Mobile Communications & Android Open Source Project Guidelines

---

# BCS613A — Textbook Notes (Module-wise)
**Subject:** Mobile Application Development
**Prescribed Textbooks:** Jochen Schiller — Mobile Communications & Android Open Source Project Guidelines

---

## Module 1 Textbook: Introduction to Mobile Computing

### Textbook Excerpt — Reference: T1_Mobile_Communications_Jochen_Schiller.txt

places (NMT at 900 MHz followed in 1986). Several other
national standards evolved and by the early 1980s Europe had more than a
handful of different, completely incompatible analog mobile phone standards.
In accordance with the general idea of a European Union, the European coun-
tries decided to develop a pan-European mobile phone standard in 1982. The
new system aimed to:
●
use a new spectrum at 900 MHz;
●
allow roaming5 throughout Europe;
●
be fully digital; and
●
offer voice and data service.
The ‘Groupe Spéciale Mobile’ (GSM) was founded for this new development.
In 1983 the US system advanced mobile phone system (AMPS) started (EIA,
1989). AMPS is an analog mobile phone system working at 850 MHz. Telephones
at home went wireless with the standard CT1 (cordless telephone) in 1984, (fol-
lowing its predecessor the CT0 from 1980). As digital systems were not yet
available, more analog standards followed, such as the German C-Netz at 450 MHz
with analog voice transmission. Hand-over between ‘cells’ was now possible, the
signalling system was digital in accordance with the trends in ﬁxed networks (SS7),
and automatic localization of a mobile user within the whole network was sup-
ported. This analog network was switched off in 2000. Apart from voice
transmission the services offered fax, data transmission via modem, X.25, and
electronic mail. CT2, the successor of CT1, was embodied into British Standards
published in 1987 (DTI, 1987) and later adopted by ETSI for Europe (ETS, 1994).
CT2 uses the spectrum at 864 MHz and offers a data channel at a rate of 32 kbit/s.
The early 1990s marked the beginning of fully digital systems. In 1991, ETSI
adopted the standard digital European cordless telephone (DECT) for digital
cordless telephony (ETSI, 1998). DECT works at a spectrum of 1880–1900 MHz
with a range of 100–500 m. One hundred and twenty duplex channels can carry
Introduction
while crossing national boundaries.

up to 1.2 Mbit/s for data transmission. Several new features, such as voice encryp-
tion and authentication, are built-in. The system supports several 10,000
users/km2 and is used in more than 110 countries around the world (over 150
million shipped units). Today, DECT has been renamed digital enhanced cord-
less telecommunications for marketing reasons and to reﬂect the capabilities of
DECT to transport multimedia data streams. Finally, after many years of discus-
sions and ﬁeld trials, GSM was standardized in a document of more than 5,000
pages in 1991. This ﬁrst version of GSM, now called global system for mobile
communication, works at 900 MHz and uses 124 full-duplex channels. GSM
offers full international roaming, automatic location services, authentication,
encryption on the wireless link, efﬁcient interoperation with ISDN systems, and a
relatively high audio quality. Furthermore, a short message service with up to 160
alphanumeric characters, fax group 3, and data services at 9.6 kbit/s have been
integrated. Depending on national

### Textbook Excerpt — Reference: T1_Mobile_Communications_Jochen_Schiller.txt

ing techniques, DECT can offer its
service to some 10,000 people within one km2. This is a typical scenario within
a big city, where thousands of offices are located in skyscrapers close together.
DECT also uses base stations, but these base stations together with a mobile sta-
tion are in a price range of €100 compared to several €10,000 for a GSM base
station. GSM base stations can typically not be used by individuals for private
networks. One reason is licensing as all GSM frequencies have been licensed to
network operators. DECT can also handle handover, but it was not designed to
work at a higher speed (e.g., up to 250 km/h like GSM systems). Devices
handling GSM and DECT exist but have never been a commercial success.
DECT works at a frequency range of 1880–1990 MHz offering 120 full
duplex channels. Time division duplex (TDD) is applied using 10 ms frames.
The frequency range is subdivided into 10 carrier frequencies using FDMA, each
frame being divided into 24 slots using TDMA. For the TDD mechanism,
Mobile communications

modulation scheme is GMSK – each station has an average transmission power
of only 10 mW with a maximum of 250 mW.
A DECT system, may have various different physical implementation depending
on its actual use. Different DECT entities can be integrated into one physical
unit; entities can be distributed, replicated etc. However, all implementations
are based on the same logical reference model of the system architecture as
shown in Figure 4.18. A global network connects the local communication
structure to the outside world and offers its services via the interface D1. Global
networks could be integrated services digital networks (ISDN), public switched
telephone networks (PSTN), public land mobile networks (PLMN), e.g., GSM, or
packet switched public data network (PSPDN). The services offered by these net-
works include transportation of data and the translation of addresses and
routing of data between the local networks.
Local networks in the DECT context offer local telecommunication ser-
vices that can include everything from simple switching to intelligent call
forwarding, address translation etc. Examples for such networks are analog or
digital private branch exchanges (PBXs) or LANs, e.g., those following the IEEE
typical network functions have to be integrated in the local or global network,
where the databases home data base (HDB) and visitor data base (VDB) are
also located. Both databases support mobility with functions that are similar to
those in the HLR and VLR in GSM systems. Incoming calls are automatically for-
warded to the current subsystem responsible for the DECT user, and the current
VDB informs the HDB about changes in location.
Telecommunication systems
PA
PA
D4
PT
PT
D3
FT
FT
D2
local
network
VDB
HDB
D1
local
network
global
network
Figure 4.18
DECT system
architecture reference
model

The DECT core network consists of the fixed radio termination (FT) and
the portable radio termination (PT), and b

---

## Module 2 Textbook: Android Development Basics

### Textbook Excerpt — Reference: T1_Mobile_Communications_Jochen_Schiller.txt

places (NMT at 900 MHz followed in 1986). Several other
national standards evolved and by the early 1980s Europe had more than a
handful of different, completely incompatible analog mobile phone standards.
In accordance with the general idea of a European Union, the European coun-
tries decided to develop a pan-European mobile phone standard in 1982. The
new system aimed to:
●
use a new spectrum at 900 MHz;
●
allow roaming5 throughout Europe;
●
be fully digital; and
●
offer voice and data service.
The ‘Groupe Spéciale Mobile’ (GSM) was founded for this new development.
In 1983 the US system advanced mobile phone system (AMPS) started (EIA,
1989). AMPS is an analog mobile phone system working at 850 MHz. Telephones
at home went wireless with the standard CT1 (cordless telephone) in 1984, (fol-
lowing its predecessor the CT0 from 1980). As digital systems were not yet
available, more analog standards followed, such as the German C-Netz at 450 MHz
with analog voice transmission. Hand-over between ‘cells’ was now possible, the
signalling system was digital in accordance with the trends in ﬁxed networks (SS7),
and automatic localization of a mobile user within the whole network was sup-
ported. This analog network was switched off in 2000. Apart from voice
transmission the services offered fax, data transmission via modem, X.25, and
electronic mail. CT2, the successor of CT1, was embodied into British Standards
published in 1987 (DTI, 1987) and later adopted by ETSI for Europe (ETS, 1994).
CT2 uses the spectrum at 864 MHz and offers a data channel at a rate of 32 kbit/s.
The early 1990s marked the beginning of fully digital systems. In 1991, ETSI
adopted the standard digital European cordless telephone (DECT) for digital
cordless telephony (ETSI, 1998). DECT works at a spectrum of 1880–1900 MHz
with a range of 100–500 m. One hundred and twenty duplex channels can carry
Introduction
while crossing national boundaries.

up to 1.2 Mbit/s for data transmission. Several new features, such as voice encryp-
tion and authentication, are built-in. The system supports several 10,000
users/km2 and is used in more than 110 countries around the world (over 150
million shipped units). Today, DECT has been renamed digital enhanced cord-
less telecommunications for marketing reasons and to reﬂect the capabilities of
DECT to transport multimedia data streams. Finally, after many years of discus-
sions and ﬁeld trials, GSM was standardized in a document of more than 5,000
pages in 1991. This ﬁrst version of GSM, now called global system for mobile
communication, works at 900 MHz and uses 124 full-duplex channels. GSM
offers full international roaming, automatic location services, authentication,
encryption on the wireless link, efﬁcient interoperation with ISDN systems, and a
relatively high audio quality. Furthermore, a short message service with up to 160
alphanumeric characters, fax group 3, and data services at 9.6 kbit/s have been
integrated. Depending on national

---

## Module 3 Textbook: Activities, Intents and UI Design

### Textbook Excerpt — Reference: T1_Mobile_Communications_Jochen_Schiller.txt

ing techniques, DECT can offer its
service to some 10,000 people within one km2. This is a typical scenario within
a big city, where thousands of offices are located in skyscrapers close together.
DECT also uses base stations, but these base stations together with a mobile sta-
tion are in a price range of €100 compared to several €10,000 for a GSM base
station. GSM base stations can typically not be used by individuals for private
networks. One reason is licensing as all GSM frequencies have been licensed to
network operators. DECT can also handle handover, but it was not designed to
work at a higher speed (e.g., up to 250 km/h like GSM systems). Devices
handling GSM and DECT exist but have never been a commercial success.
DECT works at a frequency range of 1880–1990 MHz offering 120 full
duplex channels. Time division duplex (TDD) is applied using 10 ms frames.
The frequency range is subdivided into 10 carrier frequencies using FDMA, each
frame being divided into 24 slots using TDMA. For the TDD mechanism,
Mobile communications

modulation scheme is GMSK – each station has an average transmission power
of only 10 mW with a maximum of 250 mW.
A DECT system, may have various different physical implementation depending
on its actual use. Different DECT entities can be integrated into one physical
unit; entities can be distributed, replicated etc. However, all implementations
are based on the same logical reference model of the system architecture as
shown in Figure 4.18. A global network connects the local communication
structure to the outside world and offers its services via the interface D1. Global
networks could be integrated services digital networks (ISDN), public switched
telephone networks (PSTN), public land mobile networks (PLMN), e.g., GSM, or
packet switched public data network (PSPDN). The services offered by these net-
works include transportation of data and the translation of addresses and
routing of data between the local networks.
Local networks in the DECT context offer local telecommunication ser-
vices that can include everything from simple switching to intelligent call
forwarding, address translation etc. Examples for such networks are analog or
digital private branch exchanges (PBXs) or LANs, e.g., those following the IEEE
typical network functions have to be integrated in the local or global network,
where the databases home data base (HDB) and visitor data base (VDB) are
also located. Both databases support mobility with functions that are similar to
those in the HLR and VLR in GSM systems. Incoming calls are automatically for-
warded to the current subsystem responsible for the DECT user, and the current
VDB informs the HDB about changes in location.
Telecommunication systems
PA
PA
D4
PT
PT
D3
FT
FT
D2
local
network
VDB
HDB
D1
local
network
global
network
Figure 4.18
DECT system
architecture reference
model

The DECT core network consists of the fixed radio termination (FT) and
the portable radio termination (PT), and b

---

## Module 4 Textbook: Data Storage and Networking

### Textbook Excerpt — Reference: T1_Mobile_Communications_Jochen_Schiller.txt

places (NMT at 900 MHz followed in 1986). Several other
national standards evolved and by the early 1980s Europe had more than a
handful of different, completely incompatible analog mobile phone standards.
In accordance with the general idea of a European Union, the European coun-
tries decided to develop a pan-European mobile phone standard in 1982. The
new system aimed to:
●
use a new spectrum at 900 MHz;
●
allow roaming5 throughout Europe;
●
be fully digital; and
●
offer voice and data service.
The ‘Groupe Spéciale Mobile’ (GSM) was founded for this new development.
In 1983 the US system advanced mobile phone system (AMPS) started (EIA,
1989). AMPS is an analog mobile phone system working at 850 MHz. Telephones
at home went wireless with the standard CT1 (cordless telephone) in 1984, (fol-
lowing its predecessor the CT0 from 1980). As digital systems were not yet
available, more analog standards followed, such as the German C-Netz at 450 MHz
with analog voice transmission. Hand-over between ‘cells’ was now possible, the
signalling system was digital in accordance with the trends in ﬁxed networks (SS7),
and automatic localization of a mobile user within the whole network was sup-
ported. This analog network was switched off in 2000. Apart from voice
transmission the services offered fax, data transmission via modem, X.25, and
electronic mail. CT2, the successor of CT1, was embodied into British Standards
published in 1987 (DTI, 1987) and later adopted by ETSI for Europe (ETS, 1994).
CT2 uses the spectrum at 864 MHz and offers a data channel at a rate of 32 kbit/s.
The early 1990s marked the beginning of fully digital systems. In 1991, ETSI
adopted the standard digital European cordless telephone (DECT) for digital
cordless telephony (ETSI, 1998). DECT works at a spectrum of 1880–1900 MHz
with a range of 100–500 m. One hundred and twenty duplex channels can carry
Introduction
while crossing national boundaries.

up to 1.2 Mbit/s for data transmission. Several new features, such as voice encryp-
tion and authentication, are built-in. The system supports several 10,000
users/km2 and is used in more than 110 countries around the world (over 150
million shipped units). Today, DECT has been renamed digital enhanced cord-
less telecommunications for marketing reasons and to reﬂect the capabilities of
DECT to transport multimedia data streams. Finally, after many years of discus-
sions and ﬁeld trials, GSM was standardized in a document of more than 5,000
pages in 1991. This ﬁrst version of GSM, now called global system for mobile
communication, works at 900 MHz and uses 124 full-duplex channels. GSM
offers full international roaming, automatic location services, authentication,
encryption on the wireless link, efﬁcient interoperation with ISDN systems, and a
relatively high audio quality. Furthermore, a short message service with up to 160
alphanumeric characters, fax group 3, and data services at 9.6 kbit/s have been
integrated. Depending on national

### Textbook Excerpt — Reference: T1_Mobile_Communications_Jochen_Schiller.txt

ing techniques, DECT can offer its
service to some 10,000 people within one km2. This is a typical scenario within
a big city, where thousands of offices are located in skyscrapers close together.
DECT also uses base stations, but these base stations together with a mobile sta-
tion are in a price range of €100 compared to several €10,000 for a GSM base
station. GSM base stations can typically not be used by individuals for private
networks. One reason is licensing as all GSM frequencies have been licensed to
network operators. DECT can also handle handover, but it was not designed to
work at a higher speed (e.g., up to 250 km/h like GSM systems). Devices
handling GSM and DECT exist but have never been a commercial success.
DECT works at a frequency range of 1880–1990 MHz offering 120 full
duplex channels. Time division duplex (TDD) is applied using 10 ms frames.
The frequency range is subdivided into 10 carrier frequencies using FDMA, each
frame being divided into 24 slots using TDMA. For the TDD mechanism,
Mobile communications

modulation scheme is GMSK – each station has an average transmission power
of only 10 mW with a maximum of 250 mW.
A DECT system, may have various different physical implementation depending
on its actual use. Different DECT entities can be integrated into one physical
unit; entities can be distributed, replicated etc. However, all implementations
are based on the same logical reference model of the system architecture as
shown in Figure 4.18. A global network connects the local communication
structure to the outside world and offers its services via the interface D1. Global
networks could be integrated services digital networks (ISDN), public switched
telephone networks (PSTN), public land mobile networks (PLMN), e.g., GSM, or
packet switched public data network (PSPDN). The services offered by these net-
works include transportation of data and the translation of addresses and
routing of data between the local networks.
Local networks in the DECT context offer local telecommunication ser-
vices that can include everything from simple switching to intelligent call
forwarding, address translation etc. Examples for such networks are analog or
digital private branch exchanges (PBXs) or LANs, e.g., those following the IEEE
typical network functions have to be integrated in the local or global network,
where the databases home data base (HDB) and visitor data base (VDB) are
also located. Both databases support mobility with functions that are similar to
those in the HLR and VLR in GSM systems. Incoming calls are automatically for-
warded to the current subsystem responsible for the DECT user, and the current
VDB informs the HDB about changes in location.
Telecommunication systems
PA
PA
D4
PT
PT
D3
FT
FT
D2
local
network
VDB
HDB
D1
local
network
global
network
Figure 4.18
DECT system
architecture reference
model

The DECT core network consists of the fixed radio termination (FT) and
the portable radio termination (PT), and b

---

## Module 5 Textbook: Advanced Android Topics

### Textbook Excerpt — Reference: T1_Mobile_Communications_Jochen_Schiller.txt

places (NMT at 900 MHz followed in 1986). Several other
national standards evolved and by the early 1980s Europe had more than a
handful of different, completely incompatible analog mobile phone standards.
In accordance with the general idea of a European Union, the European coun-
tries decided to develop a pan-European mobile phone standard in 1982. The
new system aimed to:
●
use a new spectrum at 900 MHz;
●
allow roaming5 throughout Europe;
●
be fully digital; and
●
offer voice and data service.
The ‘Groupe Spéciale Mobile’ (GSM) was founded for this new development.
In 1983 the US system advanced mobile phone system (AMPS) started (EIA,
1989). AMPS is an analog mobile phone system working at 850 MHz. Telephones
at home went wireless with the standard CT1 (cordless telephone) in 1984, (fol-
lowing its predecessor the CT0 from 1980). As digital systems were not yet
available, more analog standards followed, such as the German C-Netz at 450 MHz
with analog voice transmission. Hand-over between ‘cells’ was now possible, the
signalling system was digital in accordance with the trends in ﬁxed networks (SS7),
and automatic localization of a mobile user within the whole network was sup-
ported. This analog network was switched off in 2000. Apart from voice
transmission the services offered fax, data transmission via modem, X.25, and
electronic mail. CT2, the successor of CT1, was embodied into British Standards
published in 1987 (DTI, 1987) and later adopted by ETSI for Europe (ETS, 1994).
CT2 uses the spectrum at 864 MHz and offers a data channel at a rate of 32 kbit/s.
The early 1990s marked the beginning of fully digital systems. In 1991, ETSI
adopted the standard digital European cordless telephone (DECT) for digital
cordless telephony (ETSI, 1998). DECT works at a spectrum of 1880–1900 MHz
with a range of 100–500 m. One hundred and twenty duplex channels can carry
Introduction
while crossing national boundaries.

up to 1.2 Mbit/s for data transmission. Several new features, such as voice encryp-
tion and authentication, are built-in. The system supports several 10,000
users/km2 and is used in more than 110 countries around the world (over 150
million shipped units). Today, DECT has been renamed digital enhanced cord-
less telecommunications for marketing reasons and to reﬂect the capabilities of
DECT to transport multimedia data streams. Finally, after many years of discus-
sions and ﬁeld trials, GSM was standardized in a document of more than 5,000
pages in 1991. This ﬁrst version of GSM, now called global system for mobile
communication, works at 900 MHz and uses 124 full-duplex channels. GSM
offers full international roaming, automatic location services, authentication,
encryption on the wireless link, efﬁcient interoperation with ISDN systems, and a
relatively high audio quality. Furthermore, a short message service with up to 160
alphanumeric characters, fax group 3, and data services at 9.6 kbit/s have been
integrated. Depending on national

### Textbook Excerpt — Reference: T1_Mobile_Communications_Jochen_Schiller.txt

ing techniques, DECT can offer its
service to some 10,000 people within one km2. This is a typical scenario within
a big city, where thousands of offices are located in skyscrapers close together.
DECT also uses base stations, but these base stations together with a mobile sta-
tion are in a price range of €100 compared to several €10,000 for a GSM base
station. GSM base stations can typically not be used by individuals for private
networks. One reason is licensing as all GSM frequencies have been licensed to
network operators. DECT can also handle handover, but it was not designed to
work at a higher speed (e.g., up to 250 km/h like GSM systems). Devices
handling GSM and DECT exist but have never been a commercial success.
DECT works at a frequency range of 1880–1990 MHz offering 120 full
duplex channels. Time division duplex (TDD) is applied using 10 ms frames.
The frequency range is subdivided into 10 carrier frequencies using FDMA, each
frame being divided into 24 slots using TDMA. For the TDD mechanism,
Mobile communications

modulation scheme is GMSK – each station has an average transmission power
of only 10 mW with a maximum of 250 mW.
A DECT system, may have various different physical implementation depending
on its actual use. Different DECT entities can be integrated into one physical
unit; entities can be distributed, replicated etc. However, all implementations
are based on the same logical reference model of the system architecture as
shown in Figure 4.18. A global network connects the local communication
structure to the outside world and offers its services via the interface D1. Global
networks could be integrated services digital networks (ISDN), public switched
telephone networks (PSTN), public land mobile networks (PLMN), e.g., GSM, or
packet switched public data network (PSPDN). The services offered by these net-
works include transportation of data and the translation of addresses and
routing of data between the local networks.
Local networks in the DECT context offer local telecommunication ser-
vices that can include everything from simple switching to intelligent call
forwarding, address translation etc. Examples for such networks are analog or
digital private branch exchanges (PBXs) or LANs, e.g., those following the IEEE
typical network functions have to be integrated in the local or global network,
where the databases home data base (HDB) and visitor data base (VDB) are
also located. Both databases support mobility with functions that are similar to
those in the HLR and VLR in GSM systems. Incoming calls are automatically for-
warded to the current subsystem responsible for the DECT user, and the current
VDB informs the HDB about changes in location.
Telecommunication systems
PA
PA
D4
PT
PT
D3
FT
FT
D2
local
network
VDB
HDB
D1
local
network
global
network
Figure 4.18
DECT system
architecture reference
model

The DECT core network consists of the fixed radio termination (FT) and
the portable radio termination (PT), and b

---
