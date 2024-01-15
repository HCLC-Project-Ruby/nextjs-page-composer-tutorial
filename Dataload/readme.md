## Dataload Page composer widget

Page composer does not use layout template and layout slot in database, it only has container widget in database. The template and slot info are configured in tooling-ui page builder.

To load widget and container widget:

1. follow this https://help.hcltechsw.com/commerce/9.0.0/admin/tasks/tovaccessutildocker.html

2. For Production run following command from Utilities container.

    Copy dataload folder to Utilites container mounted volume asset folder.

    ```
    ./dataload.sh /SETUP/assets/Dataload/widget/wc-dataload-widget.xml
    ```

3. For Developer:

    In a command-line utility, go to the WCDE_installdir\bin directory.

    Run the following command to load the input files to register and subscribe to your widget:
    ```
    dataload.bat ..\workspace\{target_folder}\DataLoad\widget\wc-dataload-widget.xml
    ```

4. Verify the results of the data load.

  The command will load both sample container widget and widget into database.

  Note: the files in the folder is a subset of Commerce Composer dataload sample, since Page composer only use a subset of Commerce composer database table. For Commerce composer dataload, please refer to [Register Commerce Composer Widget](https://help.hcltechsw.com/commerce/9.0.0/pagecomposerframework/tasks/tpzwidgetcreatereg.html)
