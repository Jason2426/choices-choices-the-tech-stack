import { createDirectus, rest, } from '@directus/sdk';

type Vacature = {
  title: string;
  hours: string;
  locatie: string;
}

type Schema = {
  vacature: Vacature[];
}

const directus = createDirectus<Schema>('https://fdnd-agency.directus.app').with(rest());

export default directus;
