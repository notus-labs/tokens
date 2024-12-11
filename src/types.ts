import type { CoinMetadata } from '@mysten/sui/client';

export interface CoinMetadataWithExternal extends CoinMetadata {
  verified: boolean;
  tags: string[];
}
