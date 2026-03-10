// constants/helplineData.js

export const EMERGENCY_HELPLINES = [
  {
    id: 'emergency_112',
    number: '112',
    isEmergency: true,
    available: '24x7',
  },
  {
    id: 'women_181',
    number: '181',
    isEmergency: true,
    available: '24x7',
  },
  {
    id: 'distress_1091',
    number: '1091',
    isEmergency: true,
    available: '24x7',
  },
  {
    id: 'ncw_full',
    number: '7827170170',
    isEmergency: false,
    available: '24x7',
  },
  {
    id: 'ncw_short',
    number: '14490',
    isEmergency: false,
    available: '24x7',
  },
  {
    id: 'cyber_1930',
    number: '1930',
    isEmergency: false,
    available: '24x7',
  },
];

export const ORGANIZATIONS = [
  {
    id: 'ncw',
    phones: [
      { label_key: 'helpline.ncw.epabx_label', numbers: ['011-26942369', '26944740', '26944754', '26944805'] },
      { label_key: 'helpline.ncw.complaint_label', numbers: ['011-26944880', '011-26940148'], hours_key: 'helpline.ncw.complaint_hours' },
    ],
    emails: [
      { label_key: 'helpline.ncw.email_general_label', address: 'ncw@nic.in' },
      { label_key: 'helpline.ncw.email_complaint_label', address: 'complaintcell.ncw@nic.in' },
    ],
    links: [
      { label_key: 'helpline.ncw.portal_label', url: 'https://ncwapps.nic.in/' },
      { label_key: 'helpline.ncw.website_label', url: 'https://www.ncw.gov.in/' },
    ],
    address_key: 'helpline.ncw.address',
  },
  {
    id: 'nhrc',
    phones: [
      { label_key: 'helpline.nhrc.helpline_label', numbers: ['14433'] },
      { label_key: 'helpline.nhrc.general_label', numbers: ['011-24651330', '011-24663333'] },
    ],
    emails: [
      { label_key: 'helpline.nhrc.email_complaint_label', address: 'complaintcell@nhrc.nic.in' },
      { label_key: 'helpline.nhrc.email_general_label', address: 'po.nhrc@nic.in' },
    ],
    links: [],
    address_key: 'helpline.nhrc.address',
  },
  {
    id: 'mosje',
    phones: [
      { label_key: 'helpline.mosje.minister_label', numbers: ['011-23381001', '011-23381390'] },
      { label_key: 'helpline.mosje.secretary_label', numbers: ['011-23382683', '011-23389184'] },
    ],
    emails: [],
    links: [
      { label_key: 'helpline.mosje.website_label', url: 'https://socialjustice.gov.in' },
    ],
    address_key: null,
    description_key: 'helpline.mosje.description',
  },
];