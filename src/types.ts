import type { SuiClientTypes } from '@mysten/sui/client';

export type CoinMetadata = SuiClientTypes.CoinMetadata;

export type CoinMetadataWithExternal = Omit<
  SuiClientTypes.CoinMetadata,
  'id' | 'iconUrl'
> & {
  id?: string | null;
  iconUrl?: string | null;
  verified: boolean;
  tags: string[];
};
