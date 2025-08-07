export interface TGallery {
  id: string;
  title: string;
  type: string;
  description: string;
  services: TService[];
  images: TServiceImage[];
  created_at: string;
  updated_at: string;
}

export interface TServiceImage {
  id: string;
  image: string;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
}

export interface TService {
  id: string;
  title: string;
  description: string;
  icon: string;
  created_at: string;
  updated_at: string;
}

export type TServicesData = {
  galleries: TGallery[];
};

export type TServicesResponse = {
  data: TServicesData;
};

export type TServicesSlugResponse = {
  data: TServicesSlugGallery;
};

export type TServicesSlugGallery = {
  gallery: TGallery;
};
