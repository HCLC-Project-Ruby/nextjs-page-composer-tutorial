/**
 * Licensed Materials - Property of HCL Technologies Limited.
 * (C) Copyright HCL Technologies Limited  2023.
 */

import { DefaultContainerLayout } from '@/data/types/ContainerLayout';
import MyProductTestPage from '@/data/containers/default/MyProductTestPage';

export const defaultContainerLayoutManifestCustom: {
	[pageType: string]: DefaultContainerLayout;
} = {
	MyProductTestPage,
};
