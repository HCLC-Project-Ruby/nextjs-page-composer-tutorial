/**
 * Licensed Materials - Property of HCL Technologies Limited.
 * (C) Copyright HCL Technologies Limited  2023.
 */

import { ContentProps } from '@/data/types/ContentProps';

import { getMySampleSite } from '@/data/Content/MySampleSite';

export const dataContentManifestCustom: {
	[key: string]: (props: ContentProps) => Promise<{ key: string; value: unknown }[]>;
} = {
	MySampleSite: getMySampleSite
};
