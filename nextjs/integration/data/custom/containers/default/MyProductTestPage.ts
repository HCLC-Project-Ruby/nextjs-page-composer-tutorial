/**
 * Licensed Materials - Property of HCL Technologies Limited.
 * (C) Copyright HCL Technologies Limited  2023.
 */

import { DefaultContainerLayout } from '@/data/types/ContainerLayout';

const Layout: DefaultContainerLayout = {
	name: 'ProductPageLayout',
	containerName: 'my-product-test-page',
	isStoreDefault: true,
	slots: [
		{
			id: '1',
			widgets: [
				{
					widgetName: 'my-sample-site-widget',
					sequence: 0,
					name: 'MySampleSiteWidget',
				},
			],
		},
		{
			id: '2',
			widgets: [
				{
					widgetName: 'product-details-widget',
					sequence: 0,
					name: 'ProductDetails',
				},
			],
		},
		{
			id: '3',
			widgets: [
				{
					widgetName: 'merchandising-association-widget',
					sequence: 0,
					name: 'MerchandisingAssociation',
				},
			],
		},
	],
};

export default Layout;
