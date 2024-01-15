# Page Composer Tooling UI changes

1. Copy the layout-templates.json file into src\app\features\page-builder\components\layout-design folder in Angular Tooling UI project
   ![my-test-product-page-template.png](./my-test-product-page-template.png "my-test-product-page-template.png")
2. Copy the layout-widgets.json file into src\app\features\page-builder\components\layout-widgets folder
3. Copy the layout-widget-types.json file into src\app\features\page-builder\components\layout-widget-details folder
4. Make sure you do not have conflicting ids (-8010) exists already in your layout-templates and in the widget definition table (PLWIDGETDEF)
   ![my-test-product-page-sql.png](./my-test-product-page-sql.png "my-test-product-page-sql.png")
5. Run the my-test-product-page.sql commands (make sure your new template page's id doesn't conflict with existing IDs in both PLWIDGETDEF & PLSTOREWIDGET tables)
6. Restart Angular tooling UI project.
7. You should be able to use this template in page composer now.
   ![page_composer_template_design_page1.png](./page_composer_template_design_page1.PNG "page_composer_template_design_page1.png")
   ![page_composer_template_design_page2.png](./page_composer_template_design_page2.PNG "page_composer_template_design_page2.png")



