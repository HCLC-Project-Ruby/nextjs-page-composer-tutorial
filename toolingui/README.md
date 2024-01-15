# Page Composer Tooling UI changes

1. Copy the layout-templates.json file into src\app\features\page-builder\components\layout-design folder in Angular Tooling UI project
   ![my-test-product-page-template.png](./my-test-product-page-template.png "my-test-product-page-template.png")
2. Copy the layout-widgets.json file into src\app\features\page-builder\components\layout-widgets folder
3. Copy the layout-widget-types.json file into src\app\features\page-builder\components\layout-widget-details folder
4. Datalaod the new custom widget and template (make sure your new template page's id doesn't conflict with existing IDs in both PLWIDGETDEF & PLSTOREWIDGET tables)
5. Restart Angular tooling UI project.
6. You should be able to use this template in page composer now.
   ![page_composer_template_design_page1.png](./page_composer_template_design_page1.PNG "page_composer_template_design_page1.png")
   ![page_composer_template_design_page2.png](./page_composer_template_design_page2.PNG "page_composer_template_design_page2.png")
   


