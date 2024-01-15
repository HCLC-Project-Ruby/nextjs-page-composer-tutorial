## Dataload Page composer widget

Page composer does not use layout template and layout slot in database, it only has container widget in database. The template and slot info are configured in tooling-ui page builder.

To load widget and container widget:

1. follow this https://help.hcltechsw.com/commerce/9.0.0/admin/tasks/tovaccessutildocker.html

2. run following command from Utilities container.

```
./dataload.sh /SETUP/assets/Dataload/widget/wc-dataload-widget.xml
```
  The command will load both sample container widget and widget into database.

  Note: the files in the folder is a subset of Commerce Composer dataload sample, since Page composer only use a subset of Commerce composer database table. For Commerce composer dataload, please refer to [Register Commerce Composer Widget](https://help.hcltechsw.com/commerce/9.0.0/pagecomposerframework/tasks/tpzwidgetcreatereg.html)
