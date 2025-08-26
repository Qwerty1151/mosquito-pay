export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  businessHours: string;
}

export interface OfficeLocation {
  city: string;
  country: string;
  address: string;
  phone: string;
  timezone: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface ContactMethod {
  icon: string;
  title: string;
  description: string;
  contact: string;
  type: 'email' | 'phone' | 'address';
}

export const contactInfo: ContactInfo = {
  address: "123 Innovation Street, Tech District, Global City",
  phone: "+1 (555) 123-4567",
  email: "contact@navilon-dev.com",
  businessHours: "Monday - Friday: 9:00 AM - 6:00 PM"
};

export const officeLocations: OfficeLocation[] = [
  {
    city: "San Francisco",
    country: "USA",
    address: "123 Tech Street, San Francisco, CA 94105",
    phone: "+1 (415) 555-0123",
    timezone: "PST (UTC-8)",
    coordinates: {
      lat: 37.7749,
      lng: -122.4194
    }
  },
  {
    city: "London",
    country: "UK",
    address: "456 Innovation Lane, London EC2A 4BX",
    phone: "+44 20 7946 0958",
    timezone: "GMT (UTC+0)",
    coordinates: {
      lat: 51.5074,
      lng: -0.1278
    }
  },
  {
    city: "Berlin",
    country: "Germany",
    address: "789 Startup Straße, 10117 Berlin",
    phone: "+49 30 12345678",
    timezone: "CET (UTC+1)",
    coordinates: {
      lat: 52.5200,
      lng: 13.4050
    }
  },
  {
    city: "Warsaw",
    country: "Poland",
    address: "321 Tech Plaza, 00-001 Warsaw",
    phone: "+48 22 123 45 67",
    timezone: "CET (UTC+1)",
    coordinates: {
      lat: 52.2297,
      lng: 21.0122
    }
  },
  {
    city: "Singapore",
    country: "Singapore",
    address: "654 Digital Hub, Singapore 018956",
    phone: "+65 6123 4567",
    timezone: "SGT (UTC+8)",
    coordinates: {
      lat: 1.3521,
      lng: 103.8198
    }
  }
];

// Export offices as alias for officeLocations
export const offices = officeLocations;

export const contactMethods: ContactMethod[] = [
  {
    icon: "mail",
    title: "Email Us",
    description: "Send us an email and we'll get back to you within 24 hours",
    contact: "contact@navilon-dev.com",
    type: "email"
  },
  {
    icon: "phone",
    title: "Call Us",
    description: "Speak with our team directly",
    contact: "+1 (555) 123-4567",
    type: "phone"
  },
  {
    icon: "mapPin",
    title: "Visit Us",
    description: "Come visit our offices worldwide",
    contact: "Global Offices Available",
    type: "address"
  },
  {
    icon: "messageSquare",
    title: "Live Chat",
    description: "Chat with our support team in real-time",
    contact: "Available 24/7",
    type: "email"
  }
];

export const socialLinks = {
  linkedin: "https://linkedin.com/company/navilon-dev",
  twitter: "https://twitter.com/navilon_dev",
  github: "https://github.com/navilon-dev",
  instagram: "https://instagram.com/navilon_dev"
};

export const supportChannels = [
  {
    name: "General Inquiries",
    email: "info@navilon-dev.com",
    description: "For general questions and information"
  },
  {
    name: "Sales",
    email: "sales@navilon-dev.com", 
    description: "For project inquiries and quotes"
  },
  {
    name: "Support",
    email: "support@navilon-dev.com",
    description: "For technical support and assistance"
  },
  {
    name: "Careers",
    email: "careers@navilon-dev.com",
    description: "For job applications and HR inquiries"
  },
  {
    name: "Press",
    email: "press@navilon-dev.com",
    description: "For media and press inquiries"
  }
];

export const companyRegistration = {
  legalName: "Navilon Dev International Ltd.",
  registrationNumber: "GB12345678",
  vatNumber: "GB123456789",
  registeredAddress: "123 Business Park, London, UK"
};