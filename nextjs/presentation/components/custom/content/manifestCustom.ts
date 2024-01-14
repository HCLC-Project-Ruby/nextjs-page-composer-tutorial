/**
 * Licensed Materials - Property of HCL Technologies Limited.
 * (C) Copyright HCL Technologies Limited  2023.
 */

import { ID } from '@/data/types/Basic';
import dynamic from 'next/dynamic';
import { ComponentType } from 'react';

export const contentManifestCustom: Record<string, ComponentType<{ id: ID }>> = {
  MySampleSite: dynamic(() => import('@/components/content/MySampleSite').then((mod) => mod.MySampleSite)),
};
