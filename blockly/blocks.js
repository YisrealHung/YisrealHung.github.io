// 7697 5G Wi-Fi
Blockly.Blocks.linkit_wifi_5G={};
Blockly.Blocks.linkit_wifi_5G_wait_until_ready={
	init:function(){
		this.setHelpUrl(Blockly.Msg.LINKIT_SET_WIFI_HELPURL);
		this.setColour(Blockly.Blocks.linkit.HUE);
		this.appendDummyInput()
				.appendField(Blockly.Msg.LINKIT_SET_WIFI_5G_UNTIL_READY_TITLE);
		this.appendValueInput("SSID")
				.setCheck("String")
				.setAlign(Blockly.ALIGN_RIGHT)
				.appendField(Blockly.Msg.LINKIT_SET_WIFI_SSID);
		this.appendValueInput("PASSWORD")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.LINKIT_SET_WIFI_PASSWORD);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.LINKIT_SET_WIFI_TOOLTIP)
  }
};
// mooncar
Blockly.Blocks.mooncar={};
Blockly.Blocks.mooncar.HUE1=60;
Blockly.Blocks.mooncar.HUE2=120;
Blockly.Blocks.mooncar.HUE3=180;
Blockly.Blocks.mooncar.HUE4=240;
Blockly.Blocks.mooncar.HUE5=300;
Blockly.Blocks.mooncar_move_car={init:function(){
  this.setHelpUrl(Blockly.Msg.MOONCAR_HELPURL);
  this.setColour(Blockly.Blocks.mooncar.HUE1);
  this.appendDummyInput()
      .appendField(Blockly.Msg.MOVE_CAR)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.FORWARD_,"FORWARD"],[Blockly.Msg.BACKWARD_,"BACKWARD"],[Blockly.Msg.LEFT_,"LEFT"],[Blockly.Msg.RIGHT_,"RIGHT"],[Blockly.Msg.STOP_,"STOP"]]),"STAT");
  this.appendDummyInput()
      .appendField(Blockly.Msg.MOVE_SPEED);
  this.appendValueInput("SPEED")
      .setCheck("Number");
  this.setInputsInline(!0);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
  this.setTooltip(Blockly.Msg.MOVE_CAR_TOOLTIP)}
};
Blockly.Blocks.mooncar_move_motor={init:function(){
  this.setHelpUrl(Blockly.Msg.MOONCAR_HELPURL);
  this.setColour(Blockly.Blocks.mooncar.HUE1);
  this.appendDummyInput()
      .appendField(Blockly.Msg.MOVE_MOTOR_L);
  this.appendValueInput("SPEED_L")
      .setCheck("Number");
  this.appendDummyInput()
      .appendField(Blockly.Msg.MOVE_MOTOR_R);
  this.appendValueInput("SPEED_R")
      .setCheck("Number");
  this.appendDummyInput()
      .appendField("(-255~255)");
  this.setInputsInline(!0);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
  this.setTooltip(Blockly.Msg.MOVE_CAR_TOOLTIP)}
};
Blockly.Blocks.mooncar_tracker={init:function(){
  this.setHelpUrl(Blockly.Msg.MOONCAR_HELPURL);
  this.setColour(Blockly.Blocks.mooncar.HUE2);
  this.appendDummyInput()
      .appendField(Blockly.Msg.TRACKER)
  this.setInputsInline(!0);
  this.setOutput(!0,"Number");
  this.setTooltip(Blockly.Msg.MOVE_CAR_TOOLTIP)}
};
Blockly.Blocks.mooncar_sonar={init:function(){
  this.setHelpUrl(Blockly.Msg.MOONCAR_HELPURL);
  this.setColour(Blockly.Blocks.mooncar.HUE2);
  this.appendDummyInput()
      .appendField(Blockly.Msg.SONAR)
  this.setInputsInline(!0);
  this.setOutput(!0,"Number");
  this.setTooltip(Blockly.Msg.MOVE_CAR_TOOLTIP)}
};
Blockly.Blocks.mooncar_button={init:function(){
  this.setHelpUrl(Blockly.Msg.MOONCAR_HELPURL);
  this.setColour(Blockly.Blocks.mooncar.HUE2);
  this.appendDummyInput()
      .appendField(Blockly.Msg.BUTTON)
      .appendField(new Blockly.FieldDropdown([["A","A_"],["B","B_"],["AB","AB_"]]),"AB_BUTTON");
  this.appendDummyInput()
      .appendField(Blockly.Msg.BUTTON_CHECK);
  this.setInputsInline(!0);
  this.setOutput(!0,"Boolean");
  this.setTooltip(Blockly.Msg.MOVE_CAR_TOOLTIP)}
};
Blockly.Blocks.mooncar_init_tcs={init:function(){
  this.setHelpUrl(Blockly.Msg.MOONCAR_HELPURL);
  this.setColour(Blockly.Blocks.mooncar.HUE3);
  this.appendDummyInput()
      .appendField(Blockly.Msg.INIT_TCS);
  this.appendValueInput("RANGE")
      .setCheck("Number");
  this.setInputsInline(!0);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
  this.setTooltip(Blockly.Msg.MOVE_CAR_TOOLTIP)}
};
Blockly.Blocks.mooncar_read_tcs={init:function(){
  this.setHelpUrl(Blockly.Msg.MOONCAR_HELPURL);
  this.setColour(Blockly.Blocks.mooncar.HUE3);
  this.appendDummyInput()
      .appendField(Blockly.Msg.READ_TCS)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.RED,"RED"],[Blockly.Msg.GREEN,"GREEN"],[Blockly.Msg.BLUE,"BLUE"]]),"TCS");
  this.appendDummyInput()
      .appendField(Blockly.Msg.READ_VALUE);
  this.setInputsInline(!0);
  this.setOutput(!0,"Number");
  this.setTooltip(Blockly.Msg.MOVE_CAR_TOOLTIP)}
};
Blockly.Blocks.mooncar_flash_light={init:function(){
  this.setHelpUrl(Blockly.Msg.MOONCAR_HELPURL);
  this.setColour(Blockly.Blocks.mooncar.HUE3);
  this.appendDummyInput()
      .appendField(Blockly.Msg.FLASH_LIGHT)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ON,"ON"],[Blockly.Msg.OFF,"OFF"]]),"TCS_LIGHT");
  this.setInputsInline(!0);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
  this.setTooltip(Blockly.Msg.MOVE_CAR_TOOLTIP)}
};
Blockly.Blocks.mooncar_record_tcs={init:function(){
  this.setHelpUrl(Blockly.Msg.MOONCAR_HELPURL);
  this.setColour(Blockly.Blocks.mooncar.HUE3);
  this.appendDummyInput()
      .appendField(Blockly.Msg.RECORD_TCS)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.RED,"RED"],[Blockly.Msg.GREEN,"GREEN"],[Blockly.Msg.BLUE,"BLUE"],[Blockly.Msg.YELLO,"YELLO"],[Blockly.Msg.AZURE,"AZURE"],[Blockly.Msg.PURPLE,"PURPLE"],[Blockly.Msg.C1,"C1"],[Blockly.Msg.C2,"C2"],[Blockly.Msg.C3,"C3"]]),"RECORD_TCS");
  this.appendDummyInput()
      .appendField(Blockly.Msg.RECORD_VALUE);
  this.setInputsInline(!0);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
  this.setTooltip(Blockly.Msg.MOVE_CAR_TOOLTIP)}
};
Blockly.Blocks.mooncar_chack_tcs={init:function(){
  this.setHelpUrl(Blockly.Msg.MOONCAR_HELPURL);
  this.setColour(Blockly.Blocks.mooncar.HUE3);
  this.appendDummyInput()
      .appendField(Blockly.Msg.CHACK_TCS)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.RED,"RED"],[Blockly.Msg.GREEN,"GREEN"],[Blockly.Msg.BLUE,"BLUE"],[Blockly.Msg.YELLO,"YELLO"],[Blockly.Msg.AZURE,"AZURE"],[Blockly.Msg.PURPLE,"PURPLE"],[Blockly.Msg.C1,"C1"],[Blockly.Msg.C2,"C2"],[Blockly.Msg.C3,"C3"]]),"RECORD_TCS");
  this.appendDummyInput()
      .appendField(Blockly.Msg.CHACK_VALUE);
  this.setInputsInline(!0);
  this.setOutput(!0,"Boolean");
  this.setTooltip(Blockly.Msg.MOVE_CAR_TOOLTIP)}
};
Blockly.Blocks.mooncar_ir_remote_read={init:function(){
  this.setHelpUrl(Blockly.Msg.MOONCAR_HELPURL);
  this.setColour(Blockly.Blocks.mooncar.HUE4);
  this.appendDummyInput()
      .appendField(Blockly.Msg.IR_REMOTE_READ);
  this.setInputsInline(!0);
  this.appendStatementInput("IR_READ");
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip(Blockly.Msg.MOVE_CAR_TOOLTIP)}
};
Blockly.Blocks.mooncar_ir_remote_read_value={init:function(){
  this.setHelpUrl(Blockly.Msg.MOONCAR_HELPURL);
  this.setColour(Blockly.Blocks.mooncar.HUE4);
  this.appendDummyInput()
      .appendField(Blockly.Msg.IR_REMOTE_READ_VALUE)
  this.setInputsInline(!0);
  this.setOutput(!0,"String");
  this.setTooltip(Blockly.Msg.MOVE_CAR_TOOLTIP)}
};
Blockly.Blocks.mooncar_ir_remote_read_type={init:function(){
  this.setHelpUrl(Blockly.Msg.MOONCAR_HELPURL);
  this.setColour(Blockly.Blocks.mooncar.HUE4);
  this.appendDummyInput()
      .appendField(Blockly.Msg.IR_REMOTE_READ_TYPE)
  this.setInputsInline(!0);
  this.setOutput(!0,"String");
  this.setTooltip(Blockly.Msg.MOVE_CAR_TOOLTIP)}
};
Blockly.Blocks.mooncar_ir_remote_send={init:function(){
  this.setHelpUrl(Blockly.Msg.MOONCAR_HELPURL);
  this.setColour(Blockly.Blocks.mooncar.HUE4);
  this.appendDummyInput()
      .appendField(Blockly.Msg.IR_REMOTE_TYPE)
      .appendField(new Blockly.FieldDropdown([["NEC","NEC"],["Sony","SONY"],["RC5","RC5"],["RC6","RC6"]]),"IR_TYPE");
  this.appendDummyInput()
      .appendField(Blockly.Msg.IR_REMOTE_SEND);
  this.appendValueInput("IR_SEND")
      .setCheck("String");
  this.setInputsInline(!0);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
  this.setTooltip(Blockly.Msg.MOVE_CAR_TOOLTIP)}
};
Blockly.Blocks.mooncar_face_show={init:function(){
  this.setHelpUrl(Blockly.Msg.MOONCAR_HELPURL);
  this.setColour(Blockly.Blocks.mooncar.HUE5);
  this.appendDummyInput()
      .appendField(Blockly.Msg.FACE_SHOW)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.face_F1,"F1"],[Blockly.Msg.face_F2,"F2"],[Blockly.Msg.face_F3,"F3"],[Blockly.Msg.face_F4,"F4"],[Blockly.Msg.face_F5,"F5"],[Blockly.Msg.face_F6,"F6"],[Blockly.Msg.face_F7,"F7"],[Blockly.Msg.face_F8,"F8"],[Blockly.Msg.face_F9,"F9"]]),"FACE_SHOW");
  this.setInputsInline(!0);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
  this.setTooltip(Blockly.Msg.MOVE_CAR_TOOLTIP)}
};
Blockly.Blocks.mooncar_neopixel_begin={
  init:function(){
    this.setHelpUrl(Blockly.Msg.NEOPIXEL_BEGIN_HELPURL);
    this.setColour(Blockly.Blocks.ez_start_kit.HUE9);
    /*
    this.appendDummyInput()
        .appendField(Blockly.Msg.INITIALIZES_SETUP_APPENDTEXT)
        .appendField(Blockly.Msg.NEOPIXEL_TITLE)
        .appendField(Blockly.Msg.NEOPIXEL_BEGIN_NUM)
        .appendField(new Blockly.FieldTextInput("16"),"NUM");
    this.appendDummyInput()
        .appendField(Blockly.Msg.NEOPIXEL_BEGIN_PIN)
        .appendField(new Blockly.FieldDropdown(profile["default"].digital),"PIN");
    */
    this.appendDummyInput()
        .appendField(Blockly.Msg.EZ_NEOPIXEL_BEGIN_BRIGHTNESS)
    this.appendValueInput("NVALUE")
        .setCheck("Number");
    this.setInputsInline(!0);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.NEOPIXEL_BEGIN_TOOLTIP)},
};

// EZ Start Kit
Blockly.Blocks.ez_start_kit={};
Blockly.Blocks.ez_start_kit.HUE1=30;
Blockly.Blocks.ez_start_kit.HUE2=60;
Blockly.Blocks.ez_start_kit.HUE3=90;
Blockly.Blocks.ez_start_kit.HUE4=120;
Blockly.Blocks.ez_start_kit.HUE5=150;
Blockly.Blocks.ez_start_kit.HUE6=180;
Blockly.Blocks.ez_start_kit.HUE7=210;
Blockly.Blocks.ez_start_kit.HUE8=240;
Blockly.Blocks.ez_start_kit.HUE9=270;
Blockly.Blocks.ez_start_kit.HUE10=300;
Blockly.Blocks.ez_start_kit_button={init:function(){
  this.setHelpUrl(Blockly.Msg.EZ_HELPURL);
  this.setColour(Blockly.Blocks.ez_start_kit.HUE1);
  this.appendDummyInput()
      .appendField(Blockly.Msg.EZ_BUTTON)
      .appendField(new Blockly.FieldDropdown([["A","A_"],["B","B_"],["AB","AB_"]]),"AB_BUTTON");
  this.appendDummyInput()
      .appendField(Blockly.Msg.EZ_BUTTON_CHECK);
  this.setInputsInline(!0);
  this.setOutput(!0,"Boolean");
  this.setTooltip(Blockly.Msg.EZ_TOOLTIP)}
};
Blockly.Blocks.ez_start_kit_vr={init:function(){
  this.setHelpUrl(Blockly.Msg.EZ_HELPURL);
  this.setColour(Blockly.Blocks.ez_start_kit.HUE2);
  this.appendDummyInput()
      .appendField(Blockly.Msg.EZ_VR)
  this.setInputsInline(!0);
  this.setOutput(!0,"Number");
  this.setTooltip(Blockly.Msg.EZ_TOOLTIP)}
};
Blockly.Blocks.ez_start_kit_phr={init:function(){
  this.setHelpUrl(Blockly.Msg.EZ_HELPURL);
  this.setColour(Blockly.Blocks.ez_start_kit.HUE3);
  this.appendDummyInput()
      .appendField(Blockly.Msg.EZ_PHR)
  this.setInputsInline(!0);
  this.setOutput(!0,"Number");
  this.setTooltip(Blockly.Msg.EZ_TOOLTIP)}
};
Blockly.Blocks.ez_start_kit_dht={init:function(){
  this.setHelpUrl(Blockly.Msg.EZ_HELPURL);
  this.setColour(Blockly.Blocks.ez_start_kit.HUE4);
  this.appendDummyInput()
      .appendField(Blockly.Msg.EZ_DHT)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.EZ_DHT_TEMP,"ez_t"],[Blockly.Msg.EZ_DHT_HUMID,"ez_h"]]),"EZ_DHT");
  this.setInputsInline(!0);
  this.setOutput(!0,"Number");
  this.setTooltip(Blockly.Msg.EZ_TOOLTIP)}
};
Blockly.Blocks.ez_start_kit_relay={init:function(){
  this.setHelpUrl(Blockly.Msg.EZ_HELPURL);
  this.setColour(Blockly.Blocks.ez_start_kit.HUE5);
  this.appendDummyInput()
      .appendField(Blockly.Msg.EZ_RELAY)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.EZ_RELAY_ON,"ON"],[Blockly.Msg.EZ_RELAY_OFF,"OFF"]]),"EZ_RELAY");
  this.setInputsInline(!0);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
  this.setTooltip(Blockly.Msg.EZ_TOOLTIP)}
};

Blockly.Blocks.ez_start_kit_remote_read={init:function(){
  this.setHelpUrl(Blockly.Msg.EZ_HELPURL);
  this.setColour(Blockly.Blocks.ez_start_kit.HUE6);
  this.appendDummyInput()
      .appendField(Blockly.Msg.EZ_IR_REMOTE_READ);
  this.setInputsInline(!0);
  this.appendStatementInput("IR_READ");
  this.setPreviousStatement(!0);
  this.setNextStatement(!0);
  this.setTooltip(Blockly.Msg.EZ_TOOLTIP)}
};
Blockly.Blocks.ez_start_kit_ir_remote_read_value={init:function(){
  this.setHelpUrl(Blockly.Msg.EZ_HELPURL);
  this.setColour(Blockly.Blocks.ez_start_kit.HUE6);
  this.appendDummyInput()
      .appendField(Blockly.Msg.EZ_IR_REMOTE_READ_VALUE)
  this.setInputsInline(!0);
  this.setOutput(!0,"String");
  this.setTooltip(Blockly.Msg.EZ_TOOLTIP)}
};
Blockly.Blocks.ez_start_kit_ir_remote_read_type={init:function(){
  this.setHelpUrl(Blockly.Msg.EZ_HELPURL);
  this.setColour(Blockly.Blocks.ez_start_kit.HUE6);
  this.appendDummyInput()
      .appendField(Blockly.Msg.EZ_IR_REMOTE_READ_TYPE)
  this.setInputsInline(!0);
  this.setOutput(!0,"String");
  this.setTooltip(Blockly.Msg.EZ_TOOLTIP)}
};
Blockly.Blocks.ez_start_kit_custom_tone={
  init:function(){
    this.setHelpUrl(Blockly.Msg.INOUT_TONE_HELPURL);
    this.setColour(Blockly.Blocks.ez_start_kit.HUE7);
    this.appendValueInput("FREQ")
        .appendField(Blockly.Msg.EZ_TONE)
        .setCheck("Number")
        .appendField(Blockly.Msg.INOUT_TONE_APPENDTEXT_FREQ);
    this.appendValueInput("DURATION")
        .setCheck("Number")
        .appendField(Blockly.Msg.INOUT_TONE_APPENDTEXT_DURATION);
    this.setInputsInline(!0);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.INOUT_TONE_TOOLTIP)}
};
Blockly.Blocks.ez_start_kit_tone={
  init:function(){
    this.setHelpUrl(Blockly.Msg.INOUT_TONE_HELPURL);
    this.setColour(Blockly.Blocks.ez_start_kit.HUE7);
    this.appendDummyInput()
        .appendField(Blockly.Msg.EZ_TONE)
        .appendField(Blockly.Msg.INOUT_TONE_APPENDTEXT_FREQ)
        .appendField(new Blockly.FieldDropdown(profile["default"].tone),"FREQ");
    this.setInputsInline(!0);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.INOUT_TONE_TOOLTIP)}
};
Blockly.Blocks.ez_start_kit_no_tone={
  init:function(){
    this.setHelpUrl(Blockly.Msg.INOUT_TONE_HELPURL);
    this.setColour(Blockly.Blocks.ez_start_kit.HUE7);
    this.appendDummyInput()
        .appendField(Blockly.Msg.EZ_noTONE);
    this.setInputsInline(!0);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.INOUT_TONE_TOOLTIP)}
};
Blockly.Blocks.ez_start_kit_led={
  init:function(){
    this.setHelpUrl(Blockly.Msg.EZ_HELPURL);
    this.setColour(Blockly.Blocks.ez_start_kit.HUE8);
    this.appendDummyInput()
        .appendField(Blockly.Msg.EZ_LED)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.EZ_LED_RED,"red"],[Blockly.Msg.EZ_LED_YELLOW,"yellow"],[Blockly.Msg.EZ_LED_GREEN,"green"]]),"EZ_LED")
        .appendField(Blockly.Msg.EZ_LED_VALUE);
    this.appendValueInput("LVALUE")
        .setCheck("Number");
    this.setInputsInline(!0);
    this.setPreviousStatement(!0,null);
    this.setNextStatement(!0,null);
    this.setTooltip(Blockly.Msg.EZ_TOOLTIP)}
};
Blockly.Blocks.ez_start_kit_neopixel_begin={
  init:function(){
    this.setHelpUrl(Blockly.Msg.NEOPIXEL_BEGIN_HELPURL);
    this.setColour(Blockly.Blocks.ez_start_kit.HUE9);
    /*
    this.appendDummyInput()
        .appendField(Blockly.Msg.INITIALIZES_SETUP_APPENDTEXT)
        .appendField(Blockly.Msg.NEOPIXEL_TITLE)
        .appendField(Blockly.Msg.NEOPIXEL_BEGIN_NUM)
        .appendField(new Blockly.FieldTextInput("16"),"NUM");
    this.appendDummyInput()
        .appendField(Blockly.Msg.NEOPIXEL_BEGIN_PIN)
        .appendField(new Blockly.FieldDropdown(profile["default"].digital),"PIN");
    */
    this.appendDummyInput()
        .appendField(Blockly.Msg.EZ_NEOPIXEL_BEGIN_BRIGHTNESS)
    this.appendValueInput("NVALUE")
        .setCheck("Number");
    this.setInputsInline(!0);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.NEOPIXEL_BEGIN_TOOLTIP)},
};
Blockly.Blocks.ez_start_kit_neopixel_setpixelcolor={
  init:function(){
    this.setHelpUrl(Blockly.Msg.NEOPIXEL_CUSTOM_SETPIXELCOLOR_HELPURL);
    this.setColour(Blockly.Blocks.ez_start_kit.HUE9);
    this.appendDummyInput()
        .appendField(Blockly.Msg.EZ_NEOPIXEL_TITLE);
    this.appendValueInput("TARGET")
        .setCheck("Number")
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.NEOPIXEL_CUSTOM_SETPIXELCOLOR)
        .appendField(new Blockly.FieldColour("#00ff00"),"RGB");
    this.setInputsInline(!0);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.NEOPIXEL_CUSTOM_SETPIXELCOLOR_TOOLTIP)},
};
Blockly.Blocks.ez_start_kit_neopixel_setpixelcolor_hex={
  init:function(){
    this.setHelpUrl(Blockly.Msg.NEOPIXEL_CUSTOM_SETPIXELCOLOR_HELPURL);
    this.setColour(Blockly.Blocks.ez_start_kit.HUE9);
    this.appendDummyInput()
        .appendField(Blockly.Msg.EZ_NEOPIXEL_TITLE);
    this.appendValueInput("TARGET")
        .setCheck("Number")
    this.appendValueInput("RGB_HEX")
        .setCheck("String")
        .appendField(Blockly.Msg.NEOPIXEL_CUSTOM_SETPIXELCOLOR_HEX);
    this.setInputsInline(!0);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.NEOPIXEL_CUSTOM_SETPIXELCOLOR_TOOLTIP)},
};
Blockly.Blocks.ez_start_kit_neopixel_custom_setpixelcolor={
  init:function(){
    this.setHelpUrl(Blockly.Msg.NEOPIXEL_CUSTOM_SETPIXELCOLOR_HELPURL);
    this.setColour(Blockly.Blocks.ez_start_kit.HUE9);
    this.appendDummyInput()
        .appendField(Blockly.Msg.EZ_NEOPIXEL_TITLE);
    this.appendValueInput("TARGET")
        .setCheck("Number")
    this.appendValueInput("R")
        .setCheck("Number")
        .appendField(Blockly.Msg.NEOPIXEL_CUSTOM_SETPIXELCOLOR_R);
    this.appendValueInput("G")
        .setCheck("Number")
        .appendField(Blockly.Msg.NEOPIXEL_CUSTOM_SETPIXELCOLOR_G);
    this.appendValueInput("B")
        .setCheck("Number")
        .appendField(Blockly.Msg.NEOPIXEL_CUSTOM_SETPIXELCOLOR_B);
    this.setInputsInline(!0);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.NEOPIXEL_CUSTOM_SETPIXELCOLOR_TOOLTIP)},
};
Blockly.Blocks.ez_start_kit_neopixel_show={
  init:function(){
    this.setHelpUrl(Blockly.Msg.NEOPIXEL_SHOW_HELPURL);
    this.setColour(Blockly.Blocks.ez_start_kit.HUE9);
    this.appendDummyInput()
        .appendField(Blockly.Msg.EZ_NEOPIXEL_TITLE)
        .appendField(Blockly.Msg.NEOPIXEL_SHOW);
    this.setInputsInline(!0);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.NEOPIXEL_SHOW_TOOLTIP)},
};

Blockly.Blocks.ez_start_kit_neopixel_clear={
  init:function(){
    this.setHelpUrl(Blockly.Msg.NEOPIXEL_SHOW_HELPURL);
    this.setColour(Blockly.Blocks.ez_start_kit.HUE9);
    this.appendDummyInput()
        .appendField(Blockly.Msg.EZ_NEOPIXEL_CLEAR);
    this.setInputsInline(!0);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.NEOPIXEL_SHOW_TOOLTIP)},
};
Blockly.Blocks.ez_start_kit_oled_display_setting={
  init:function(){
    this.setHelpUrl(Blockly.Msg.OLED_DISPLAY_HELPURL);
    this.setColour(Blockly.Blocks.ez_start_kit.HUE10);
    this.appendDummyInput()
        .appendField(Blockly.Msg.INITIALIZES_SETUP_APPENDTEXT)
        .appendField(Blockly.Msg.OLED_DISPLAY_TITLE)
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.OLED_DISPLAY_TOOLTIP)}
};
Blockly.Blocks.ez_start_kit_oled_display_clear={
  init:function(){
    this.setHelpUrl(Blockly.Msg.OLED_DISPLAY_HELPURL);
    this.setColour(Blockly.Blocks.ez_start_kit.HUE10);
    this.appendDummyInput()
        .appendField(Blockly.Msg.OLED_DISPLAY_TITLE)
        .appendField(Blockly.Msg.OLED_DISPLAY_CLEAR);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.OLED_DISPLAY_TOOLTIP)}
};
Blockly.Blocks.ez_start_kit_oled_display_draw_commands={
  init:function(){
    this.setHelpUrl(Blockly.Msg.OLED_DISPLAY_HELPURL);
    this.setColour(Blockly.Blocks.ez_start_kit.HUE10);
    this.appendDummyInput()
        .appendField(Blockly.Msg.OLED_DISPLAY_TITLE)
        .appendField(Blockly.Msg.OLED_DISPLAY_DRAW_COMMANDS);
    this.appendStatementInput("DRAW_CMD");
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.OLED_DISPLAY_TOOLTIP)}
};
Blockly.Blocks.ez_start_kit_oled_display_set_font={
  init:function(){
    this.setHelpUrl(Blockly.Msg.OLED_DISPLAY_HELPURL);
    this.setColour(Blockly.Blocks.ez_start_kit.HUE10);
    this.appendDummyInput()
        .appendField(Blockly.Msg.OLED_DISPLAY_TITLE)
        .appendField(Blockly.Msg.OLED_DISPLAY_SET_FONT)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.OLED_DISPLAY_SET_FONT_SMALL,"u8g2_font_6x10_mf"],
                                                [Blockly.Msg.OLED_DISPLAY_SET_FONT_LARGE,"u8g2_font_8x13_mf"]
                                              ]),"FONT");
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.OLED_DISPLAY_TOOLTIP)}
};

Blockly.Blocks.ez_start_kit_oled_display_set_album={
  init:function(){
    this.setHelpUrl(Blockly.Msg.OLED_DISPLAY_HELPURL);
    this.setColour(Blockly.Blocks.ez_start_kit.HUE10);
    this.appendValueInput("ALBUM")
        .appendField(Blockly.Msg.EZ_OLED_DISPLAY_ALBUM)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.custom_C1,"C1"],
                                                [Blockly.Msg.custom_C2,"C2"],
                                                [Blockly.Msg.custom_C3,"C3"],
                                                [Blockly.Msg.custom_C4,"C4"],
                                                [Blockly.Msg.custom_C5,"C5"],
                                                [Blockly.Msg.custom_C6,"C6"],
                                                [Blockly.Msg.custom_C7,"C7"],
                                                [Blockly.Msg.custom_C8,"C8"],
                                                [Blockly.Msg.custom_C9,"C9"],
                                                [Blockly.Msg.custom_C10,"C10"]
                                              ]),"CUSTOM_ALBUM");
    this.setPreviousStatement(!0,null);
    this.setNextStatement(!0,null);
    this.setTooltip(Blockly.Msg.OLED_DISPLAY_TOOLTIP)}
};

Blockly.Blocks.ez_start_kit_oled_display_show_album={init:function(){
  this.setHelpUrl(Blockly.Msg.OLED_DISPLAY_HELPURL);
  this.setColour(Blockly.Blocks.ez_start_kit.HUE10);
  this.appendDummyInput()
      .appendField(Blockly.Msg.show_album)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.custom_C1,"C1"],
                                              [Blockly.Msg.custom_C2,"C2"],
                                              [Blockly.Msg.custom_C3,"C3"],
                                              [Blockly.Msg.custom_C4,"C4"],
                                              [Blockly.Msg.custom_C5,"C5"],
                                              [Blockly.Msg.custom_C6,"C6"],
                                              [Blockly.Msg.custom_C7,"C7"],
                                              [Blockly.Msg.custom_C8,"C8"],
                                              [Blockly.Msg.custom_C9,"C9"],
                                              [Blockly.Msg.custom_C10,"C10"]
                                            ]),"CUSTOM_ALBUM");
  this.setInputsInline(!0);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
  this.setTooltip(Blockly.Msg.OLED_DISPLAY_TOOLTIP)}
};

Blockly.Blocks.ez_start_kit_oled_display_set_album2={
  init:function(){
    this.setHelpUrl(Blockly.Msg.OLED_DISPLAY_HELPURL);
    this.setColour(Blockly.Blocks.ez_start_kit.HUE10);
    this.appendDummyInput()
        .appendField(Blockly.Msg.EZ_OLED_DISPLAY_ALBUM_NAME);
    this.appendValueInput("Name")
        .setCheck("String");
    this.appendDummyInput()
        .appendField(Blockly.Msg.EZ_OLED_DISPLAY_ALBUM_XBM);
    this.appendValueInput("Data")
        .setCheck("String");
    this.setInputsInline(!0);
    this.setPreviousStatement(!0,null);
    this.setNextStatement(!0,null);
    this.setTooltip(Blockly.Msg.OLED_DISPLAY_TOOLTIP)
  }
};

Blockly.Blocks.ez_start_kit_oled_display_show_album2={init:function(){
  this.setHelpUrl(Blockly.Msg.OLED_DISPLAY_HELPURL);
  this.setColour(Blockly.Blocks.ez_start_kit.HUE10);
  this.appendDummyInput()
      .appendField(Blockly.Msg.SHOW_ALBUM_NAME);
  this.appendValueInput("Name")
      .setCheck("String");
  this.setInputsInline(!0);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
  this.setTooltip(Blockly.Msg.OLED_DISPLAY_TOOLTIP)}
};

// RockBot
Blockly.Blocks.RockBot={};
Blockly.Blocks.RockBot.HUE1=300;
Blockly.Blocks.RockBot.HUE2=120;
Blockly.Blocks.RockBot.HUE3=240;
Blockly.Blocks.RockBot.HUE4=0;
Blockly.Blocks.RockBot_motor_go={
  init:function(){
    this.setHelpUrl(Blockly.Msg.RockBot_HELPURL);
    this.setColour(Blockly.Blocks.RockBot.HUE1);
    this.appendDummyInput()
        .appendField(Blockly.Msg.RockBot_MOTOR_GO)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.Move_forward,"Move_forward"],
                                                [Blockly.Msg.Move_back,"Move_back"],
                                                [Blockly.Msg.Move_turnleft,"Move_turnleft"],
                                                [Blockly.Msg.Move_turnright,"Move_turnright"],
                                                [Blockly.Msg.Move_left,"Move_left"],
                                                [Blockly.Msg.Move_right,"Move_right"],
                                                [Blockly.Msg.Move_frontright,"Move_frontright"],
                                                [Blockly.Msg.Move_backleft,"Move_backleft"],
                                                [Blockly.Msg.Move_frontleft,"Move_frontleft"],
                                                [Blockly.Msg.Move_backright,"Move_backright"],
                                                [Blockly.Msg.Move_stop,"Move_stop"]]
                                              ),"STATE");
    this.appendDummyInput()
        .appendField(Blockly.Msg.RockBot_MOTOR_SPEED);
    this.appendValueInput("SPEED")
        .setCheck("Number");
    this.setInputsInline(!0);
    this.setPreviousStatement(!0,null);
    this.setNextStatement(!0,null);
    this.setTooltip(Blockly.Msg.RockBot_TOOLTIP)
  }
};

Blockly.Blocks.RockBot_motor_control={
  init:function(){
    this.setHelpUrl(Blockly.Msg.RockBot_HELPURL);
    this.setColour(Blockly.Blocks.RockBot.HUE1);
    this.appendDummyInput()
        .appendField(Blockly.Msg.RockBot_motor_LF);
    this.appendValueInput("LF")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(Blockly.Msg.RockBot_motor_RF);
    this.appendValueInput("RF")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(Blockly.Msg.RockBot_motor_LB);
    this.appendValueInput("LB")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(Blockly.Msg.RockBot_motor_RB);
    this.appendValueInput("RB")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("(-127~127)");
    this.setInputsInline(!0);
    this.setPreviousStatement(!0,null);
    this.setNextStatement(!0,null);
    this.setTooltip(Blockly.Msg.MOVE_CAR_TOOLTIP)
  }
};

Blockly.Blocks.RockBot_servo_control={
  init:function(){
    this.setHelpUrl(Blockly.Msg.RockBot_HELPURL);
    this.setColour(Blockly.Blocks.RockBot.HUE2);
    this.appendDummyInput()
        .appendField(Blockly.Msg.RockBot_SERVO)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.SERVO1,"S1"],
                                                [Blockly.Msg.SERVO2,"S2"]]
                                              ),"ServoNumber");
    this.appendDummyInput()
        .appendField(Blockly.Msg.RockBot_SERVO_DEGREE);
    this.appendValueInput("degree")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("(0~90)");
    this.setInputsInline(!0);
    this.setPreviousStatement(!0,null);
    this.setNextStatement(!0,null);
    this.setTooltip(Blockly.Msg.RockBot_TOOLTIP)
  }
};

/*
Blockly.Blocks.RockBot_servo_pulse_control={
  init:function(){
    this.setHelpUrl(Blockly.Msg.RockBot_HELPURL);
    this.setColour(Blockly.Blocks.RockBot.HUE1);
    this.appendDummyInput()
        .appendField(Blockly.Msg.RockBot_SERVO)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.SERVO1,"S1"],
                                                [Blockly.Msg.SERVO2,"S2"]]
                                              ),"ServoNumber");
    this.appendDummyInput()
        .appendField(Blockly.Msg.RockBot_SERVO_PULSE);
    this.appendValueInput("pulse")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("(500~2500)");
    this.setInputsInline(!0);
    this.setPreviousStatement(!0,null);
    this.setNextStatement(!0,null);
    this.setTooltip(Blockly.Msg.RockBot_TOOLTIP)
  }
};
*/
Blockly.Blocks.IO_digital_write={
  init:function(){
    this.setHelpUrl(Blockly.Msg.RockBot_HELPURL);
    this.setColour(Blockly.Blocks.RockBot.HUE3);
    this.appendDummyInput()
        .appendField(Blockly.Msg.RockBot_IO_DIGITAL_WRITE)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.IO1,"15"],
                                                [Blockly.Msg.IO2,"16"],
                                                [Blockly.Msg.IO3,"17"],
                                                [Blockly.Msg.IO4,"13"],
                                                [Blockly.Msg.IO5,"12"],
                                                [Blockly.Msg.IO6,"11"],
                                                [Blockly.Msg.IO7,"10"]]
                                              ),"IO_PIN")
        .appendField(Blockly.Msg.INOUT_DIGITAL_WRITE_APPENDTEXT_STAT)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.INOUT_HIGH,"HIGH"],[Blockly.Msg.INOUT_LOW,"LOW"]]),"STAT");
    this.setPreviousStatement(!0,null);
    this.setNextStatement(!0,null);
    this.setTooltip(Blockly.Msg.RockBot_TOOLTIP)
  }
};

Blockly.Blocks.IO_digital_read={
  init:function(){
    this.setHelpUrl(Blockly.Msg.RockBot_HELPURL);
    this.setColour(Blockly.Blocks.RockBot.HUE3);
    this.appendDummyInput()
        .appendField(Blockly.Msg.RockBot_IO_DIGITAL_READ)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.IO1,"15"],
                                                [Blockly.Msg.IO2,"16"],
                                                [Blockly.Msg.IO3,"17"],
                                                [Blockly.Msg.IO4,"13"],
                                                [Blockly.Msg.IO5,"12"],
                                                [Blockly.Msg.IO6,"11"],
                                                [Blockly.Msg.IO7,"10"]]
                                              ),"IO_PIN")
    this.setInputsInline(!0);
    this.setOutput(!0,"Boolean");
    this.setTooltip(Blockly.Msg.RockBot_TOOLTIP)
  }
};

Blockly.Blocks.IO_analog_write={
  init:function(){
    this.setHelpUrl(Blockly.Msg.RockBot_HELPURL);
    this.setColour(Blockly.Blocks.RockBot.HUE4);
    this.appendDummyInput()
        .appendField(Blockly.Msg.RockBot_IO_ANALOG_WRITE)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.IO1,"15"],
                                                [Blockly.Msg.IO2,"16"],
                                                [Blockly.Msg.IO3,"17"],
                                                [Blockly.Msg.IO4,"13"],
                                                [Blockly.Msg.IO5,"12"],
                                                [Blockly.Msg.IO6,"11"],
                                                [Blockly.Msg.IO7,"10"]]
                                              ),"IO_PIN")
    this.appendValueInput("IO_value")
        .setCheck("Number")
        .appendField(Blockly.Msg.INOUT_ANALOG_WRITE_APPENDTEXT_VALUE);
    this.setInputsInline(!0);
    this.setPreviousStatement(!0,null);
    this.setNextStatement(!0,null);
    this.setTooltip(Blockly.Msg.RockBot_TOOLTIP)
  }
};

Blockly.Blocks.IO_analog_read={
  init:function(){
    this.setHelpUrl(Blockly.Msg.RockBot_HELPURL);
    this.setColour(Blockly.Blocks.RockBot.HUE4);
    this.appendDummyInput()
        .appendField(Blockly.Msg.RockBot_IO_ANALOG_Read)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.IO1,"15"],
                                                [Blockly.Msg.IO2,"16"],
                                                [Blockly.Msg.IO3,"17"]]
                                              ),"IO_PIN")
    this.setOutput(!0,"Number");
    this.setTooltip(Blockly.Msg.RockBot_TOOLTIP)
  }
};

Blockly.Blocks.RockBot_custom_tone={
  init:function(){
    this.setHelpUrl(Blockly.Msg.INOUT_TONE_HELPURL);
    this.setColour(Blockly.Blocks.ez_start_kit.HUE7);
    this.appendValueInput("FREQ")
        .appendField(Blockly.Msg.EZ_TONE)
        .setCheck("Number")
        .appendField(Blockly.Msg.INOUT_TONE_APPENDTEXT_FREQ);
    this.appendValueInput("DURATION")
        .setCheck("Number")
        .appendField(Blockly.Msg.INOUT_TONE_APPENDTEXT_DURATION);
    this.setInputsInline(!0);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.INOUT_TONE_TOOLTIP)}
};

Blockly.Blocks.RockBot_tone={
  init:function(){
    this.setHelpUrl(Blockly.Msg.INOUT_TONE_HELPURL);
    this.setColour(Blockly.Blocks.ez_start_kit.HUE7);
    this.appendDummyInput()
        .appendField(Blockly.Msg.EZ_TONE)
        .appendField(Blockly.Msg.INOUT_TONE_APPENDTEXT_FREQ)
        .appendField(new Blockly.FieldDropdown(profile["default"].tone),"FREQ");
    this.setInputsInline(!0);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.INOUT_TONE_TOOLTIP)}
};
Blockly.Blocks.RockBot_no_tone={
  init:function(){
    this.setHelpUrl(Blockly.Msg.INOUT_TONE_HELPURL);
    this.setColour(Blockly.Blocks.ez_start_kit.HUE7);
    this.appendDummyInput()
        .appendField(Blockly.Msg.EZ_noTONE);
    this.setInputsInline(!0);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.INOUT_TONE_TOOLTIP)}
};

Blockly.Blocks.RockBot_neopixel_begin={
  init:function(){
    this.setHelpUrl(Blockly.Msg.NEOPIXEL_BEGIN_HELPURL);
    this.setColour(Blockly.Blocks.ez_start_kit.HUE9);
    /*
    this.appendDummyInput()
        .appendField(Blockly.Msg.INITIALIZES_SETUP_APPENDTEXT)
        .appendField(Blockly.Msg.NEOPIXEL_TITLE)
        .appendField(Blockly.Msg.NEOPIXEL_BEGIN_NUM)
        .appendField(new Blockly.FieldTextInput("16"),"NUM");
    this.appendDummyInput()
        .appendField(Blockly.Msg.NEOPIXEL_BEGIN_PIN)
        .appendField(new Blockly.FieldDropdown(profile["default"].digital),"PIN");
    */
    this.appendDummyInput()
        .appendField(Blockly.Msg.EZ_NEOPIXEL_BEGIN_BRIGHTNESS)
    this.appendValueInput("NVALUE")
        .setCheck("Number");
    this.setInputsInline(!0);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.NEOPIXEL_BEGIN_TOOLTIP)},
};

Blockly.Blocks.RockBot_neopixel_setpixelcolor={
  init:function(){
    this.setHelpUrl(Blockly.Msg.NEOPIXEL_CUSTOM_SETPIXELCOLOR_HELPURL);
    this.setColour(Blockly.Blocks.ez_start_kit.HUE9);
    this.appendDummyInput()
        .appendField(Blockly.Msg.EZ_NEOPIXEL_TITLE)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LeftLight,"0"],
                                                [Blockly.Msg.RightLight,"1"]]
                                              ),"light_IO");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.NEOPIXEL_CUSTOM_SETPIXELCOLOR)
        .appendField(new Blockly.FieldColour("#00ff00"),"RGB");
    this.setInputsInline(!0);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.NEOPIXEL_CUSTOM_SETPIXELCOLOR_TOOLTIP)},
};

Blockly.Blocks.RockBot_neopixel_custom_setpixelcolor={
  init:function(){
    this.setHelpUrl(Blockly.Msg.NEOPIXEL_CUSTOM_SETPIXELCOLOR_HELPURL);
    this.setColour(Blockly.Blocks.ez_start_kit.HUE9);
    this.appendDummyInput()
        .appendField(Blockly.Msg.EZ_NEOPIXEL_TITLE)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LeftLight,"0"],
                                                [Blockly.Msg.RightLight,"1"]]
                                              ),"light_IO");
    this.appendValueInput("R")
        .setCheck("Number")
        .appendField(Blockly.Msg.NEOPIXEL_CUSTOM_SETPIXELCOLOR_R);
    this.appendValueInput("G")
        .setCheck("Number")
        .appendField(Blockly.Msg.NEOPIXEL_CUSTOM_SETPIXELCOLOR_G);
    this.appendValueInput("B")
        .setCheck("Number")
        .appendField(Blockly.Msg.NEOPIXEL_CUSTOM_SETPIXELCOLOR_B);
    this.setInputsInline(!0);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.NEOPIXEL_CUSTOM_SETPIXELCOLOR_TOOLTIP)},
};

Blockly.Blocks.RockBot_neopixel_show={
  init:function(){
    this.setHelpUrl(Blockly.Msg.NEOPIXEL_SHOW_HELPURL);
    this.setColour(Blockly.Blocks.ez_start_kit.HUE9);
    this.appendDummyInput()
        .appendField(Blockly.Msg.EZ_NEOPIXEL_TITLE)
        .appendField(Blockly.Msg.NEOPIXEL_SHOW);
    this.setInputsInline(!0);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.NEOPIXEL_SHOW_TOOLTIP)},
};

Blockly.Blocks.RockBot_neopixel_clear={
  init:function(){
    this.setHelpUrl(Blockly.Msg.NEOPIXEL_SHOW_HELPURL);
    this.setColour(Blockly.Blocks.ez_start_kit.HUE9);
    this.appendDummyInput()
        .appendField(Blockly.Msg.EZ_NEOPIXEL_CLEAR);
    this.setInputsInline(!0);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.NEOPIXEL_SHOW_TOOLTIP)},
};

// NFC/RFID
Blockly.Blocks.NFC_RFID={};
Blockly.Blocks.NFC_RFID.HUE=200;
Blockly.Blocks.NFC_RFID.HUE1=240;
Blockly.Blocks.NFC_RFID_setup={
  init:function(){
    this.setHelpUrl(Blockly.Msg.NFC_RFID_HELPURL);
    this.setColour(Blockly.Blocks.NFC_RFID.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.NFC_RFID_setup_TITLE);
    this.appendValueInput("IRQ")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(Blockly.Msg.NFC_RFID_setup_IRQ_TITLE);
    this.setInputsInline(!0);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.NEOPIXEL_BEGIN_TOOLTIP)
  }
};

Blockly.Blocks.NFC_RFID_read={
  init:function(){
    this.setHelpUrl(Blockly.Msg.NFC_RFID_HELPURL);
    this.setColour(Blockly.Blocks.NFC_RFID.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.NFC_RFID_read_TITLE);
    this.setOutput(!0,"String");
    this.setTooltip(Blockly.Msg.NFC_RFID_TOOLTIP)
  }
};

Blockly.Blocks.NFC_RFID_read_block={
  init:function(){
    this.setHelpUrl(Blockly.Msg.NFC_RFID_HELPURL);
    this.setColour(Blockly.Blocks.NFC_RFID.HUE);
    this.appendValueInput("SECTOR")
        .setCheck("Number")
        .appendField(Blockly.Msg.NFC_RFID_read_sector_TITLE);
    this.appendValueInput("BLOCK")
        .setCheck("Number")
        .appendField(Blockly.Msg.NFC_RFID_read_block_TITLE);
    this.setInputsInline(!0);
    this.setOutput(!0,["String"]);
    this.setTooltip(Blockly.Msg.NFC_RFID_TOOLTIP)
  }
};

Blockly.Blocks.NFC_RFID_write_block={
  init:function(){
    this.setHelpUrl(Blockly.Msg.NFC_RFID_HELPURL);
    this.setColour(Blockly.Blocks.NFC_RFID.HUE);
    this.appendValueInput("SECTOR")
        .setCheck("Number")
        .appendField(Blockly.Msg.NFC_RFID_write_sector_TITLE);
    this.appendValueInput("Data")
        .appendField(Blockly.Msg.NFC_RFID_write_data_TITLE);
    this.setPreviousStatement(!0,null);
    this.setNextStatement(!0,null);
    this.setInputsInline(!0);
    this.setTooltip(Blockly.Msg.NFC_RFID_TOOLTIP)
  }
};

Blockly.Blocks.NFC_RFID_format={
  init:function(){
    this.setHelpUrl(Blockly.Msg.NFC_RFID_HELPURL);
    this.setColour(Blockly.Blocks.NFC_RFID.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.NFC_RFID_FORMAT_TITLE);
    this.setPreviousStatement(!0,null);
    this.setNextStatement(!0,null);
    this.setInputsInline(!0);
    this.setTooltip(Blockly.Msg.NFC_RFID_TOOLTIP)
  }
};


Blockly.Blocks.mfrc522_read_nostop={
  init:function(){
    this.setHelpUrl(Blockly.Msg.NFC_RFID_HELPURL);
    this.setColour(Blockly.Blocks.NFC_RFID.HUE1);
    this.appendDummyInput()
        .appendField(Blockly.Msg.mfrc522_read_nostop_TITLE);
    this.setInputsInline(!0);
    this.setOutput(!0,"String");
    this.setTooltip(Blockly.Msg.MFRC522_RFID_TOOLTIP)
  },onchange:function(){}
};

Blockly.Blocks.mfrc522_read_block={
  init:function(){
    this.setHelpUrl(Blockly.Msg.NFC_RFID_HELPURL);
    this.setColour(Blockly.Blocks.NFC_RFID.HUE1);
    this.appendValueInput("SECTOR")
        .setCheck("Number")
        .appendField(Blockly.Msg.mfrc522_read_sector_TITLE);
    this.appendValueInput("BLOCK")
        .setCheck("Number")
        .appendField(Blockly.Msg.mfrc522_read_block_TITLE);
    this.setInputsInline(!0);
    this.setOutput(!0,["String"]);
    this.setTooltip(Blockly.Msg.NFC_RFID_TOOLTIP)
  }
};

Blockly.Blocks.mfrc522_write_block={
  init:function(){
    this.setHelpUrl(Blockly.Msg.NFC_RFID_HELPURL);
    this.setColour(Blockly.Blocks.NFC_RFID.HUE1);
    this.appendValueInput("SECTOR")
        .setCheck("Number")
        .appendField(Blockly.Msg.mfrc522_write_sector_TITLE);
    this.appendValueInput("BLOCK")
        .setCheck("Number")
        .appendField(Blockly.Msg.mfrc522_write_block_TITLE);
    this.appendValueInput("Data")
        .appendField(Blockly.Msg.mfrc522_write_data_TITLE);
    this.setPreviousStatement(!0,null);
    this.setNextStatement(!0,null);
    this.setInputsInline(!0);
    this.setTooltip(Blockly.Msg.NFC_RFID_TOOLTIP)
  }
};

Blockly.Blocks.mfrc522_stop={
  init:function(){
    this.setHelpUrl(Blockly.Msg.NFC_RFID_HELPURL);
    this.setColour(Blockly.Blocks.NFC_RFID.HUE1);
    this.appendDummyInput()
        .appendField(Blockly.Msg.mfrc522_stop_TITLE);
    this.setPreviousStatement(!0,null);
    this.setNextStatement(!0,null);
    this.setInputsInline(!0);
    this.setTooltip(Blockly.Msg.NFC_RFID_TOOLTIP)
  }
};

// M5Stack Stick V / Unit V
Blockly.Blocks.m5_stack_v={};
Blockly.Blocks.m5_stack_v.HUE1=25;
Blockly.Blocks.m5_stack_v.HUE2=50;
Blockly.Blocks.m5_stack_v.HUE3=75;
Blockly.Blocks.m5_stack_v.HUE4=100;
Blockly.Blocks.m5_stack_v.HUE5=125;
Blockly.Blocks.m5_stack_v.HUE6=150;
Blockly.Blocks.m5_stack_v.HUE7=175;
Blockly.Blocks.m5_stack_v.HUE8=200;
Blockly.Blocks.m5_stack_v.HUE9=225;
Blockly.Blocks.m5_stack_v.HUE10=250;
Blockly.Blocks.m5_stack_v.HUE11=275;
Blockly.Blocks.m5_stack_v.HUE12=300;

Blockly.Blocks.m5_stack_v_serial_set={init:function(){
  this.setHelpUrl(Blockly.Msg.M5_HELPURL);
  this.setColour(Blockly.Blocks.m5_stack_v.HUE1);
  this.appendDummyInput()
      .appendField(Blockly.Msg.M5_Serial_Set)
      .appendField("RX")
      .appendField(new Blockly.FieldDropdown([["2","2"],["3","3"]]),"RX_PIN");
  this.appendDummyInput()
      .appendField("TX")
      .appendField(new Blockly.FieldDropdown(profile["default"].digital),"TX_PIN");
  this.setInputsInline(!0);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
  this.setTooltip(Blockly.Msg.M5_TOOLTIP)}
};

Blockly.Blocks.m5_stack_v_motion_detect_mode={init:function(){
  this.setHelpUrl(Blockly.Msg.M5_HELPURL);
  this.setColour(Blockly.Blocks.m5_stack_v.HUE2);
  this.appendDummyInput()
      .appendField(Blockly.Msg.M5_Motion_Detect_Mode)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.M5_STATIC,"m5_static"],[Blockly.Msg.M5_DYNAMIC,"m5_dynamic"]]),"m5_motion_detect_mode");
  this.setInputsInline(!0);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
  this.setTooltip(Blockly.Msg.M5_TOOLTIP)}
};

Blockly.Blocks.m5_stack_v_motion_detect_thr={init:function(){
  this.setHelpUrl(Blockly.Msg.M5_HELPURL);
  this.setColour(Blockly.Blocks.m5_stack_v.HUE2);
  this.appendDummyInput()
      .appendField(Blockly.Msg.M5_Motion_Detect_Thr);
  this.appendValueInput("thr_")
      .setCheck("Number");
  this.appendDummyInput()
      .appendField("(0~99)");
  this.setInputsInline(!0);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
  this.setTooltip(Blockly.Msg.M5_TOOLTIP)}
};

Blockly.Blocks.m5_stack_v_motion_detect_scan={init:function(){
  this.setHelpUrl(Blockly.Msg.M5_HELPURL);
  this.setColour(Blockly.Blocks.m5_stack_v.HUE2);
  this.appendDummyInput()
      .appendField(Blockly.Msg.M5_Motion_Detect_Scan1);
  this.appendValueInput("scanx_")
      .setCheck("Number");
  this.appendDummyInput()
      .appendField(Blockly.Msg.M5_Motion_Detect_Scan2);
  this.appendValueInput("scany_")
      .setCheck("Number");
  this.appendDummyInput()
      .appendField("(0~40)");
  this.setInputsInline(!0);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
  this.setTooltip(Blockly.Msg.M5_TOOLTIP)}
};

Blockly.Blocks.m5_stack_v_motion_detect_main={init:function(){
  this.setHelpUrl(Blockly.Msg.M5_HELPURL);
  this.setColour(Blockly.Blocks.m5_stack_v.HUE2);
  this.appendDummyInput()
      .appendField(Blockly.Msg.M5_Motion_Detect_Main)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.M5_DIFF_TOTAL,"m5_diff_total"],[Blockly.Msg.M5_DIFF_MAX,"m5_diff_max"],[Blockly.Msg.M5_TOTAL,"m5_total"]]),"m5_stack_v_motion_detect_main");
  this.setInputsInline(!0);
  this.setOutput(!0,"String");
  this.setTooltip(Blockly.Msg.M5_TOOLTIP)}
};

Blockly.Blocks.m5_stack_v_motion_detect_data={init:function(){
  this.setHelpUrl(Blockly.Msg.M5_HELPURL);
  this.setColour(Blockly.Blocks.m5_stack_v.HUE2);
  this.appendDummyInput()
      .appendField(Blockly.Msg.M5_Motion_Detect_Data_Box);
  this.appendValueInput("BOX")
      .setCheck("Number");
  this.appendDummyInput()
      .appendField(Blockly.Msg.M5_Motion_Detect_Data_Choose)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.M5_X,"m5_x"],[Blockly.Msg.M5_Y,"m5_y"],[Blockly.Msg.M5_W,"m5_w"],[Blockly.Msg.M5_H,"m5_h"],[Blockly.Msg.M5_AREA,"m5_area"]]),"m5_stack_v_motion_detect_data");
  this.setInputsInline(!0);
  this.setOutput(!0,"String");
  this.setTooltip(Blockly.Msg.M5_TOOLTIP)}
};

Blockly.Blocks.m5_stack_v_target_trace_set={init:function(){
  this.setHelpUrl(Blockly.Msg.M5_HELPURL);
  this.setColour(Blockly.Blocks.m5_stack_v.HUE3);
  this.appendDummyInput()
      .appendField(Blockly.Msg.M5_Target_Trace_Set_x);
  this.appendValueInput("x_")
      .setCheck("Number");
  this.appendDummyInput()
      .appendField(Blockly.Msg.M5_Target_Trace_Set_y);
  this.appendValueInput("y_")
      .setCheck("Number");
  this.appendDummyInput()
      .appendField(Blockly.Msg.M5_Target_Trace_Set_w);
  this.appendValueInput("w_")
      .setCheck("Number");
  this.appendDummyInput()
      .appendField(Blockly.Msg.M5_Target_Trace_Set_h);
  this.appendValueInput("h_")
      .setCheck("Number");
  this.setInputsInline(!0);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
  this.setTooltip(Blockly.Msg.M5_TOOLTIP)}
};

Blockly.Blocks.m5_stack_v_target_trace_read={init:function(){
  this.setHelpUrl(Blockly.Msg.M5_HELPURL);
  this.setColour(Blockly.Blocks.m5_stack_v.HUE3);
  this.appendDummyInput()
      .appendField(Blockly.Msg.M5_target_trace_Data_Choose)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.M5_X,"m5_x"],[Blockly.Msg.M5_Y,"m5_y"],[Blockly.Msg.M5_W,"m5_w"],[Blockly.Msg.M5_H,"m5_h"]]),"m5_stack_v_target_trace_data");
  this.setInputsInline(!0);
  this.setOutput(!0,"String");
  this.setTooltip(Blockly.Msg.M5_TOOLTIP)}
};

Blockly.Blocks.m5_stack_v_color_trace_lab={init:function(){
  this.setHelpUrl(Blockly.Msg.M5_HELPURL);
  this.setColour(Blockly.Blocks.m5_stack_v.HUE4);
  this.appendDummyInput()
      .appendField(Blockly.Msg.M5_Color_Trace_Lmin);
  this.appendValueInput("Lmin_")
      .setCheck("Number");
  this.appendDummyInput()
      .appendField(Blockly.Msg.M5_Color_Trace_Lmax);
  this.appendValueInput("Lmax_")
      .setCheck("Number");
  this.appendDummyInput()
      .appendField(Blockly.Msg.M5_Color_Trace_Amin);
  this.appendValueInput("Amin_")
      .setCheck("Number");
  this.appendDummyInput()
      .appendField(Blockly.Msg.M5_Color_Trace_Amax);
  this.appendValueInput("Amax_")
      .setCheck("Number");
  this.appendDummyInput()
      .appendField(Blockly.Msg.M5_Color_Trace_Bmin);
  this.appendValueInput("Bmin_")
      .setCheck("Number");
  this.appendDummyInput()
      .appendField(Blockly.Msg.M5_Color_Trace_Bmax);
  this.appendValueInput("Bmax_")
      .setCheck("Number");
  this.setInputsInline(!0);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
  this.setTooltip(Blockly.Msg.M5_TOOLTIP)}
};

Blockly.Blocks.m5_stack_v_color_trace_scan={init:function(){
  this.setHelpUrl(Blockly.Msg.M5_HELPURL);
  this.setColour(Blockly.Blocks.m5_stack_v.HUE4);
  this.appendDummyInput()
      .appendField(Blockly.Msg.M5_Color_Trace_Scanx);
  this.appendValueInput("scanx_")
      .setCheck("Number");
  this.appendDummyInput()
      .appendField(Blockly.Msg.M5_Color_Trace_Scany);
  this.appendValueInput("scany_")
      .setCheck("Number");
  this.appendDummyInput()
      .appendField("(0~40)");
  this.setInputsInline(!0);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
  this.setTooltip(Blockly.Msg.M5_TOOLTIP)}
};

Blockly.Blocks.m5_stack_v_color_trace_merge={init:function(){
  this.setHelpUrl(Blockly.Msg.M5_HELPURL);
  this.setColour(Blockly.Blocks.m5_stack_v.HUE4);
  this.appendDummyInput()
      .appendField(Blockly.Msg.M5_Color_Trace_Merge);
  this.appendValueInput("mer_")
      .setCheck("Number");
  this.appendDummyInput()
      .appendField("(0~40)");
  this.setInputsInline(!0);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
  this.setTooltip(Blockly.Msg.M5_TOOLTIP)}
};

Blockly.Blocks.m5_stack_v_color_trace_thr={init:function(){
  this.setHelpUrl(Blockly.Msg.M5_HELPURL);
  this.setColour(Blockly.Blocks.m5_stack_v.HUE4);
  this.appendDummyInput()
      .appendField(Blockly.Msg.M5_Color_Trace_thrw);
  this.appendValueInput("thrw_")
      .setCheck("Number");
  this.appendDummyInput()
      .appendField(Blockly.Msg.M5_Color_Trace_thrh);
  this.appendValueInput("thrh_")
      .setCheck("Number");
  this.appendDummyInput()
      .appendField("(3~200)");
  this.setInputsInline(!0);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
  this.setTooltip(Blockly.Msg.M5_TOOLTIP)}
};

Blockly.Blocks.m5_stack_v_color_trace_count={init:function(){
  this.setHelpUrl(Blockly.Msg.M5_HELPURL);
  this.setColour(Blockly.Blocks.m5_stack_v.HUE4);
  this.appendDummyInput()
      .appendField(Blockly.Msg.M5_Color_Trace_Count);
  this.setInputsInline(!0);
  this.setOutput(!0,"String");
  this.setTooltip(Blockly.Msg.M5_TOOLTIP)}
};


Blockly.Blocks.m5_stack_v_color_trace_data={init:function(){
  this.setHelpUrl(Blockly.Msg.M5_HELPURL);
  this.setColour(Blockly.Blocks.m5_stack_v.HUE4);
  this.appendDummyInput()
      .appendField(Blockly.Msg.M5_Color_Trace_Data_Box);
  this.appendValueInput("BOX")
      .setCheck("Number");
  this.appendDummyInput()
      .appendField(Blockly.Msg.M5_Color_Trace_Data_Choose)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.M5_X,"m5_x"],[Blockly.Msg.M5_Y,"m5_y"],[Blockly.Msg.M5_W,"m5_w"],[Blockly.Msg.M5_H,"m5_h"],[Blockly.Msg.M5_AREA,"m5_area"]]),"m5_stack_v_color_trace_data");
  this.setInputsInline(!0);
  this.setOutput(!0,"String");
  this.setTooltip(Blockly.Msg.M5_TOOLTIP)}
};

Blockly.Blocks.m5_stack_v_face_detect_count={init:function(){
  this.setHelpUrl(Blockly.Msg.M5_HELPURL);
  this.setColour(Blockly.Blocks.m5_stack_v.HUE5);
  this.appendDummyInput()
      .appendField(Blockly.Msg.M5_Face_Detect_Count);
  this.setInputsInline(!0);
  this.setOutput(!0,"String");
  this.setTooltip(Blockly.Msg.M5_TOOLTIP)}
};

Blockly.Blocks.m5_stack_v_face_detect_data={init:function(){
  this.setHelpUrl(Blockly.Msg.M5_HELPURL);
  this.setColour(Blockly.Blocks.m5_stack_v.HUE5);
  this.appendDummyInput()
      .appendField(Blockly.Msg.M5_Face_Detect_Data_Box);
  this.appendValueInput("BOX")
      .setCheck("Number");
  this.appendDummyInput()
      .appendField(Blockly.Msg.M5_Face_Detect_Data_Choose)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.M5_X,"m5_x"],[Blockly.Msg.M5_Y,"m5_y"],[Blockly.Msg.M5_W,"m5_w"],[Blockly.Msg.M5_H,"m5_h"],[Blockly.Msg.M5_value,"m5_value"]]),"m5_stack_v_face_detect_data");
  this.setInputsInline(!0);
  this.setOutput(!0,"String");
  this.setTooltip(Blockly.Msg.M5_TOOLTIP)}
};

Blockly.Blocks.m5_stack_v_qr_code_set={init:function(){
  this.setHelpUrl(Blockly.Msg.M5_HELPURL);
  this.setColour(Blockly.Blocks.m5_stack_v.HUE6);
  this.appendDummyInput()
      .appendField(Blockly.Msg.M5_QR_Code_Set);
  this.setInputsInline(!0);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
  this.setTooltip(Blockly.Msg.M5_TOOLTIP)}
};

Blockly.Blocks.m5_stack_v_qr_code_count={init:function(){
  this.setHelpUrl(Blockly.Msg.M5_HELPURL);
  this.setColour(Blockly.Blocks.m5_stack_v.HUE6);
  this.appendDummyInput()
      .appendField(Blockly.Msg.M5_QR_Code_Count);
  this.setInputsInline(!0);
  this.setOutput(!0,"String");
  this.setTooltip(Blockly.Msg.M5_TOOLTIP)}
};

Blockly.Blocks.m5_stack_v_qr_code_data={init:function(){
  this.setHelpUrl(Blockly.Msg.M5_HELPURL);
  this.setColour(Blockly.Blocks.m5_stack_v.HUE6);
  this.appendDummyInput()
      .appendField(Blockly.Msg.M5_QR_Code_Data1);
  this.appendValueInput("BOX")
      .setCheck("Number");
  this.appendDummyInput()
      .appendField(Blockly.Msg.M5_QR_Code_Data2);
  this.setInputsInline(!0);
  this.setOutput(!0,"String");
  this.setTooltip(Blockly.Msg.M5_TOOLTIP)}
};

Blockly.Blocks.m5_stack_v_bar_code_set={init:function(){
  this.setHelpUrl(Blockly.Msg.M5_HELPURL);
  this.setColour(Blockly.Blocks.m5_stack_v.HUE7);
  this.appendDummyInput()
      .appendField(Blockly.Msg.M5_Bar_Code_Set);
  this.setInputsInline(!0);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
  this.setTooltip(Blockly.Msg.M5_TOOLTIP)}
};

Blockly.Blocks.m5_stack_v_bar_code_count={init:function(){
  this.setHelpUrl(Blockly.Msg.M5_HELPURL);
  this.setColour(Blockly.Blocks.m5_stack_v.HUE7);
  this.appendDummyInput()
      .appendField(Blockly.Msg.M5_Bar_Code_Count);
  this.setInputsInline(!0);
  this.setOutput(!0,"String");
  this.setTooltip(Blockly.Msg.M5_TOOLTIP)}
};

Blockly.Blocks.m5_stack_v_bar_code_data={init:function(){
  this.setHelpUrl(Blockly.Msg.M5_HELPURL);
  this.setColour(Blockly.Blocks.m5_stack_v.HUE7);
  this.appendDummyInput()
      .appendField(Blockly.Msg.M5_Bar_Code_Data1);
  this.appendValueInput("BOX")
      .setCheck("Number");
  this.appendDummyInput()
      .appendField(Blockly.Msg.M5_Bar_Code_Data2);
  this.setInputsInline(!0);
  this.setOutput(!0,"String");
  this.setTooltip(Blockly.Msg.M5_TOOLTIP)}
};

Blockly.Blocks.m5_stack_v_datamatrix_code_set={init:function(){
  this.setHelpUrl(Blockly.Msg.M5_HELPURL);
  this.setColour(Blockly.Blocks.m5_stack_v.HUE8);
  this.appendDummyInput()
      .appendField(Blockly.Msg.M5_Datamatrix_Code_Set);
  this.setInputsInline(!0);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
  this.setTooltip(Blockly.Msg.M5_TOOLTIP)}
};

Blockly.Blocks.m5_stack_v_datamatrix_code_count={init:function(){
  this.setHelpUrl(Blockly.Msg.M5_HELPURL);
  this.setColour(Blockly.Blocks.m5_stack_v.HUE8);
  this.appendDummyInput()
      .appendField(Blockly.Msg.M5_Datamatrix_Code_Count);
  this.setInputsInline(!0);
  this.setOutput(!0,"String");
  this.setTooltip(Blockly.Msg.M5_TOOLTIP)}
};

Blockly.Blocks.m5_stack_v_datamatrix_code_data={init:function(){
  this.setHelpUrl(Blockly.Msg.M5_HELPURL);
  this.setColour(Blockly.Blocks.m5_stack_v.HUE8);
  this.appendDummyInput()
      .appendField(Blockly.Msg.M5_Datamatrix_Code_Data1);
  this.appendValueInput("BOX")
      .setCheck("Number");
  this.appendDummyInput()
      .appendField(Blockly.Msg.M5_Datamatrix_Code_Data2);
  this.setInputsInline(!0);
  this.setOutput(!0,"String");
  this.setTooltip(Blockly.Msg.M5_TOOLTIP)}
};

Blockly.Blocks.m5_stack_v_april_tag_set={init:function(){
  this.setHelpUrl(Blockly.Msg.M5_HELPURL);
  this.setColour(Blockly.Blocks.m5_stack_v.HUE9);
  this.appendDummyInput()
      .appendField(Blockly.Msg.M5_April_Tag_Set);
  this.setInputsInline(!0);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
  this.setTooltip(Blockly.Msg.M5_TOOLTIP)}
};

Blockly.Blocks.m5_stack_v_april_tag_count={init:function(){
  this.setHelpUrl(Blockly.Msg.M5_HELPURL);
  this.setColour(Blockly.Blocks.m5_stack_v.HUE9);
  this.appendDummyInput()
      .appendField(Blockly.Msg.M5_April_Tag_Count);
  this.setInputsInline(!0);
  this.setOutput(!0,"String");
  this.setTooltip(Blockly.Msg.M5_TOOLTIP)}
};

Blockly.Blocks.m5_stack_v_april_tag_data={init:function(){
  this.setHelpUrl(Blockly.Msg.M5_HELPURL);
  this.setColour(Blockly.Blocks.m5_stack_v.HUE9);
  this.appendDummyInput()
      .appendField(Blockly.Msg.M5_April_Tag_Data);
  this.appendValueInput("BOX")
      .setCheck("Number");
  this.appendDummyInput()
      .appendField(Blockly.Msg.M5_April_Tag_Data_Choose)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.M5_id,"m5_id"],[Blockly.Msg.M5_family,"m5_family"]]),"m5_stack_v_april_tag_data");
  this.setInputsInline(!0);
  this.setOutput(!0,"String");
  this.setTooltip(Blockly.Msg.M5_TOOLTIP)}
};

Blockly.Blocks.m5_stack_v_tag_reader_count={init:function(){
  this.setHelpUrl(Blockly.Msg.M5_HELPURL);
  this.setColour(Blockly.Blocks.m5_stack_v.HUE10);
  this.appendDummyInput()
      .appendField(Blockly.Msg.M5_Tag_Reader_Count);
  this.setInputsInline(!0);
  this.setOutput(!0,"String");
  this.setTooltip(Blockly.Msg.M5_TOOLTIP)}
};

Blockly.Blocks.m5_stack_v_tag_reader_data={init:function(){
  this.setHelpUrl(Blockly.Msg.M5_HELPURL);
  this.setColour(Blockly.Blocks.m5_stack_v.HUE10);
  this.appendDummyInput()
      .appendField(Blockly.Msg.M5_Tag_Reader_Data);
  this.appendValueInput("BOX")
      .setCheck("Number");
  this.appendDummyInput()
      .appendField(Blockly.Msg.M5_Tag_Reader_Data_Choose)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.M5_code,"m5_code"],[Blockly.Msg.M5_binstr,"m5_binstr"]]),"m5_stack_v_tag_reader_data");
  this.setInputsInline(!0);
  this.setOutput(!0,"String");
  this.setTooltip(Blockly.Msg.M5_TOOLTIP)}
};

Blockly.Blocks.m5_stack_v_line_tracker_lab={init:function(){
  this.setHelpUrl(Blockly.Msg.M5_HELPURL);
  this.setColour(Blockly.Blocks.m5_stack_v.HUE11);
  this.appendDummyInput()
      .appendField(Blockly.Msg.M5_Color_Trace_Lmin);
  this.appendValueInput("Lmin_")
      .setCheck("Number");
  this.appendDummyInput()
      .appendField(Blockly.Msg.M5_Color_Trace_Lmax);
  this.appendValueInput("Lmax_")
      .setCheck("Number");
  this.appendDummyInput()
      .appendField(Blockly.Msg.M5_Color_Trace_Amin);
  this.appendValueInput("Amin_")
      .setCheck("Number");
  this.appendDummyInput()
      .appendField(Blockly.Msg.M5_Color_Trace_Amax);
  this.appendValueInput("Amax_")
      .setCheck("Number");
  this.appendDummyInput()
      .appendField(Blockly.Msg.M5_Color_Trace_Bmin);
  this.appendValueInput("Bmin_")
      .setCheck("Number");
  this.appendDummyInput()
      .appendField(Blockly.Msg.M5_Color_Trace_Bmax);
  this.appendValueInput("Bmax_")
      .setCheck("Number");
  this.setInputsInline(!0);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
  this.setTooltip(Blockly.Msg.M5_TOOLTIP)}
};

Blockly.Blocks.m5_stack_v_line_tracker_weight={init:function(){
  this.setHelpUrl(Blockly.Msg.M5_HELPURL);
  this.setColour(Blockly.Blocks.m5_stack_v.HUE11);
  this.appendDummyInput()
      .appendField(Blockly.Msg.M5_line_tracker_w0);
  this.appendValueInput("W0_")
      .setCheck("Number");
  this.appendDummyInput()
      .appendField(Blockly.Msg.M5_line_tracker_w1);
  this.appendValueInput("W1_")
      .setCheck("Number");
  this.appendDummyInput()
      .appendField(Blockly.Msg.M5_line_tracker_w2);
  this.appendValueInput("W2_")
      .setCheck("Number");
  this.setInputsInline(!0);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
  this.setTooltip(Blockly.Msg.M5_TOOLTIP)}
};

Blockly.Blocks.m5_stack_v_line_tracker_data={init:function(){
  this.setHelpUrl(Blockly.Msg.M5_HELPURL);
  this.setColour(Blockly.Blocks.m5_stack_v.HUE11);
  this.appendDummyInput()
      .appendField(Blockly.Msg.M5_line_tracker_data);
  this.setInputsInline(!0);
  this.setOutput(!0,"String");
  this.setTooltip(Blockly.Msg.M5_TOOLTIP)}
};

// PCA9685
Blockly.Blocks.pca9685={};
Blockly.Blocks.pca9685.HUE1=240;
Blockly.Blocks.pca9685.HUE2=270;
Blockly.Blocks.pca9685.HUE3=300;
Blockly.Blocks.pca9685_init={
  init:function(){
    this.setHelpUrl(Blockly.Msg.PCA9685_HELPURL);
    this.setColour(Blockly.Blocks.pca9685.HUE1);
    this.appendDummyInput()
        .appendField(Blockly.Msg.PCA9685_init);
    this.setInputsInline(!0);
    this.setPreviousStatement(!0,null);
    this.setNextStatement(!0,null);
    this.setTooltip(Blockly.Msg.PCA9685_TOOLTIP)
  }
};
Blockly.Blocks.pca9685_pwm_write={
  init:function(){
    this.setHelpUrl(Blockly.Msg.PCA9685_HELPURL);
    this.setColour(Blockly.Blocks.pca9685.HUE2);
    this.appendDummyInput()
        .appendField(Blockly.Msg.pwm_channel);
    this.appendValueInput("Channel")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(Blockly.Msg.pwm_value);
    this.appendValueInput("Value")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("(0~4095)");
    this.setInputsInline(!0);
    this.setPreviousStatement(!0,null);
    this.setNextStatement(!0,null);
    this.setTooltip(Blockly.Msg.PCA9685_TOOLTIP)
  }
};

Blockly.Blocks.pca9685_servo_init={
  init:function(){
    this.setHelpUrl(Blockly.Msg.PCA9685_HELPURL);
    this.setColour(Blockly.Blocks.pca9685.HUE1);
    this.appendDummyInput()
        .appendField(Blockly.Msg.servo_pulse_min);
    this.appendValueInput("pulse_min")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(Blockly.Msg.servo_pulse_max);
    this.appendValueInput("pulse_max")
        .setCheck("Number");
    this.setInputsInline(!0);
    this.setPreviousStatement(!0,null);
    this.setNextStatement(!0,null);
    this.setTooltip(Blockly.Msg.PCA9685_TOOLTIP)
  }
};

Blockly.Blocks.pca9685_servo_write={
  init:function(){
    this.setHelpUrl(Blockly.Msg.PCA9685_HELPURL);
    this.setColour(Blockly.Blocks.pca9685.HUE3);
    this.appendDummyInput()
        .appendField(Blockly.Msg.servo_channel);
    this.appendValueInput("Channel")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(Blockly.Msg.servo_degree);
    this.appendValueInput("Degree")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("(0~180)");
    this.setInputsInline(!0);
    this.setPreviousStatement(!0,null);
    this.setNextStatement(!0,null);
    this.setTooltip(Blockly.Msg.PCA9685_TOOLTIP)
  }
};

// Sensor Big
Blockly.Blocks.sensor_big={};
Blockly.Blocks.sensor_big.HUE=30;
Blockly.Blocks.pms5003_t_read={
  init:function(){
    this.setHelpUrl(Blockly.Msg.sensor_big_HELPURL);
    this.setColour(Blockly.Blocks.sensor_big.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.PMS5003_T_TITLE)
        .appendField(new Blockly.FieldDropdown([["PMS5003","PMS5003"],["PMS5003T","PMS5003T"]]),"PMS");
    this.appendDummyInput()
        .appendField("RX")
        .appendField(new Blockly.FieldDropdown([["2","2"],["3","3"]]),"RX_PIN");
    this.appendDummyInput()
        .appendField("TX")
        .appendField(new Blockly.FieldDropdown(profile["default"].digital),"TX_PIN");
    this.appendDummyInput()
        .appendField(Blockly.Msg.PMS5003_T_LAST);
    this.setInputsInline(!0);
    this.setPreviousStatement(!0,null);
    this.setNextStatement(!0,null);
    this.setTooltip(Blockly.Msg.sensor_big_TOOLTIP)
  }
};

Blockly.Blocks.pms5003_t_read_sensor={
  init:function(){
    this.setHelpUrl(Blockly.Msg.sensor_big_HELPURL);
    this.setColour(Blockly.Blocks.sensor_big.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.PMS_READ_VALIE)
        .appendField(new Blockly.FieldDropdown([["PM1.0","pms_read_PM1"],["PM2.5","pms_read_PM2"],["PM10","pms_read_PM10"],[Blockly.Msg.PMS5003_T_TEMP,"pms_read_Temp"],[Blockly.Msg.PMS5003_T_HUMID,"pms_read_Humid"]]),"PMS_CHOOSE");
    this.setInputsInline(!0);
    this.setOutput(!0,"Number");
    this.setTooltip(Blockly.Msg.sensor_big_TOOLTIP)
  }
};

Blockly.Blocks.sgp30_read={
  init:function(){
    this.setHelpUrl(Blockly.Msg.sensor_big_HELPURL);
    this.setColour(Blockly.Blocks.sensor_big.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.SGP30_TITLE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.SIGNAL_PIN)
        .appendField(new Blockly.FieldDropdown([["I2C","PIN"]]),"PIN");
    this.appendDummyInput()
        .appendField(Blockly.Msg.SGP30_LAST);
    this.setInputsInline(!0);
    this.setPreviousStatement(!0,null);
    this.setNextStatement(!0,null);
    this.setTooltip(Blockly.Msg.sensor_big_TOOLTIP)
  }
};

Blockly.Blocks.sgp30_read_sensor={
  init:function(){
    this.setHelpUrl(Blockly.Msg.sensor_big_HELPURL);
    this.setColour(Blockly.Blocks.sensor_big.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.SGP30_READ_TYPE)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.SGP30_TVOC,"SGP30_TVOC"],
                                                [Blockly.Msg.SGP30_eCO2,"SGP30_eCO2"]]),"SGP30_CHOOSE");
    this.setInputsInline(!0);
    this.setOutput(!0,"Number");
    this.setTooltip(Blockly.Msg.sensor_big_TOOLTIP)
  }
};

Blockly.Blocks.m5_mini_rfid={
  init:function(){
    this.setHelpUrl(Blockly.Msg.sensor_big_HELPURL);
    this.setColour(Blockly.Blocks.sensor_big.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.M5_MINI_RFID);
    this.setInputsInline(!0);
    this.setOutput(!0,"String");
    this.setTooltip(Blockly.Msg.sensor_big_TOOLTIP)
  }
};





Blockly.Blocks.NFC_RFID_write_block={
  init:function(){
    this.setHelpUrl(Blockly.Msg.NFC_RFID_HELPURL);
    this.setColour(Blockly.Blocks.NFC_RFID.HUE);
    this.appendValueInput("SECTOR")
        .setCheck("Number")
        .appendField(Blockly.Msg.NFC_RFID_write_sector_TITLE);
    this.appendValueInput("Data")
        .appendField(Blockly.Msg.NFC_RFID_write_data_TITLE);
    this.setPreviousStatement(!0,null);
    this.setNextStatement(!0,null);
    this.setInputsInline(!0);
    this.setTooltip(Blockly.Msg.NFC_RFID_TOOLTIP)
  }
};
//-------------------------------------
Blockly.Blocks.module_neopixel_begin={
  init:function(){
    this.setHelpUrl(Blockly.Msg.NEOPIXEL_BEGIN_HELPURL);
    this.setColour(Blockly.Blocks.ez_start_kit.HUE9);
    this.appendDummyInput()
        .appendField(Blockly.Msg.MODULE_NEO_NAME);
		this.appendValueInput("Name")
        .setCheck("String");
		this.appendDummyInput()
        .appendField("PINS")
        .appendField(new Blockly.FieldDropdown(profile["default"].digital),"TX_PIN");
		this.appendDummyInput()
        .appendField(Blockly.Msg.MODULE_NEO_NUMBER);
    this.appendValueInput("LNUM")
        .setCheck("Number");
		this.appendDummyInput()
        .appendField(Blockly.Msg.MODULE_NEO_BRIGHTNESS);
    this.appendValueInput("NVALUE")
        .setCheck("Number");
    this.setInputsInline(!0);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.NEOPIXEL_BEGIN_TOOLTIP)},
};
Blockly.Blocks.module_neopixel_setpixelcolor={
  init:function(){
    this.setHelpUrl(Blockly.Msg.NEOPIXEL_CUSTOM_SETPIXELCOLOR_HELPURL);
    this.setColour(Blockly.Blocks.ez_start_kit.HUE9);
		this.appendValueInput("Name")
        .setCheck("String");
    this.appendDummyInput()
        .appendField(Blockly.Msg.MODULE_NEOPIXEL_TITLE);
    this.appendValueInput("TARGET")
        .setCheck("Number")
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.NEOPIXEL_CUSTOM_SETPIXELCOLOR)
        .appendField(new Blockly.FieldColour("#00ff00"),"RGB");
    this.setInputsInline(!0);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.NEOPIXEL_CUSTOM_SETPIXELCOLOR_TOOLTIP)},
};
Blockly.Blocks.module_neopixel_custom_setpixelcolor={
  init:function(){
    this.setHelpUrl(Blockly.Msg.NEOPIXEL_CUSTOM_SETPIXELCOLOR_HELPURL);
    this.setColour(Blockly.Blocks.ez_start_kit.HUE9);
		this.appendValueInput("Name")
        .setCheck("String");
    this.appendDummyInput()
        .appendField(Blockly.Msg.MODULE_NEOPIXEL_TITLE);
    this.appendValueInput("TARGET")
        .setCheck("Number")
    this.appendValueInput("R")
        .setCheck("Number")
        .appendField(Blockly.Msg.NEOPIXEL_CUSTOM_SETPIXELCOLOR_R);
    this.appendValueInput("G")
        .setCheck("Number")
        .appendField(Blockly.Msg.NEOPIXEL_CUSTOM_SETPIXELCOLOR_G);
    this.appendValueInput("B")
        .setCheck("Number")
        .appendField(Blockly.Msg.NEOPIXEL_CUSTOM_SETPIXELCOLOR_B);
    this.setInputsInline(!0);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.NEOPIXEL_CUSTOM_SETPIXELCOLOR_TOOLTIP)},
};
Blockly.Blocks.module_neopixel_show={
  init:function(){
    this.setHelpUrl(Blockly.Msg.NEOPIXEL_SHOW_HELPURL);
    this.setColour(Blockly.Blocks.ez_start_kit.HUE9);
		this.appendValueInput("Name")
        .setCheck("String");
    this.appendDummyInput()
        .appendField(Blockly.Msg.MODULE_NEOPIXEL_TITLE)
        .appendField(Blockly.Msg.NEOPIXEL_SHOW);
    this.setInputsInline(!0);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.NEOPIXEL_SHOW_TOOLTIP)},
};

Blockly.Blocks.module_neopixel_clear={
  init:function(){
    this.setHelpUrl(Blockly.Msg.NEOPIXEL_SHOW_HELPURL);
    this.setColour(Blockly.Blocks.ez_start_kit.HUE9);
		this.appendValueInput("Name")
        .setCheck("String");
    this.appendDummyInput()
        .appendField(Blockly.Msg.MODULE_NEOPIXEL_CLEAR);
    this.setInputsInline(!0);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.NEOPIXEL_SHOW_TOOLTIP)},
};
Blockly.Blocks.module_neopixel_setbrightness={
  init:function(){
    this.setHelpUrl(Blockly.Msg.NEOPIXEL_BEGIN_HELPURL);
    this.setColour(Blockly.Blocks.ez_start_kit.HUE9);
		this.appendValueInput("Name")
        .setCheck("String");
		this.appendDummyInput()
        .appendField(Blockly.Msg.MODULE_NEO_BRIGHTNESS);
    this.appendValueInput("NVALUE")
        .setCheck("Number");
    this.setInputsInline(!0);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.NEOPIXEL_BEGIN_TOOLTIP)},
};
//-------------------------------------

// HUSKYLENS
Blockly.Blocks.huskylens={};
Blockly.Blocks.huskylens.HUE=30;
Blockly.Blocks.huskylens_i2c_init={
  init:function() {
    this.setHelpUrl(Blockly.Msg.HUSKYLENS_HELPURL);
    this.setColour(Blockly.Blocks.huskylens.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.HUSKYLENS_I2C_INIT);
    this.setInputsInline(!0);
    this.setPreviousStatement(!0,null);
    this.setNextStatement(!0,null);
    this.setTooltip(Blockly.Msg.HUSKYLENS_TOOLTIP)
  }
};

Blockly.Blocks.huskylens_uart_init={
  init:function() {
    this.setHelpUrl(Blockly.Msg.HUSKYLENS_HELPURL);
    this.setColour(Blockly.Blocks.huskylens.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.HUSKYLENS_UART_INIT);
    this.appendDummyInput()
        .appendField("RX")
        .appendField(new Blockly.FieldDropdown([["2","2"],["3","3"]]),"RX_PIN");
    this.appendDummyInput()
        .appendField("TX")
        .appendField(new Blockly.FieldDropdown(profile["default"].digital),"TX_PIN");
    this.appendDummyInput()
        .appendField(Blockly.Msg.HUSKYLENS_UART_INIT2);
    this.setInputsInline(!0);
    this.setPreviousStatement(!0,null);
    this.setNextStatement(!0,null);
    this.setTooltip(Blockly.Msg.HUSKYLENS_TOOLTIP)
  }
};

Blockly.Blocks.huskylens_set_mode={
  init:function() {
    this.setHelpUrl(Blockly.Msg.HUSKYLENS_HELPURL);
    this.setColour(Blockly.Blocks.huskylens.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.HUSKYLENS_SET_MODE)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.FACE_RECOGNITION,"FR"],
                                                [Blockly.Msg.OBJECT_TRACKING,"OT"],
                                                [Blockly.Msg.OBJECT_RECOGNITION,"OR"],
                                                [Blockly.Msg.LINE_TRACKING,"LT"],
                                                [Blockly.Msg.COLOR_RECOGNITION,"CR"],
                                                [Blockly.Msg.TAG_RECOGNITION,"TR"],
                                                [Blockly.Msg.OBJECT_CLASSIFICATION,"OC"]
                                              ]),"MODE_LIST");
    this.setInputsInline(!0);
    this.setPreviousStatement(!0,null);
    this.setNextStatement(!0,null);
    this.setTooltip(Blockly.Msg.HUSKYLENS_TOOLTIP)
  }
};

Blockly.Blocks.huskylens_read_data={
  init:function() {
    this.setHelpUrl(Blockly.Msg.HUSKYLENS_HELPURL);
    this.setColour(Blockly.Blocks.huskylens.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.HUSKYLENS_READ_DATA);
    this.setInputsInline(!0);
    this.setPreviousStatement(!0,null);
    this.setNextStatement(!0,null);
    this.setTooltip(Blockly.Msg.HUSKYLENS_TOOLTIP)
  }
};

Blockly.Blocks.huskylens_read_now={
  init:function() {
    this.setHelpUrl(Blockly.Msg.HUSKYLENS_HELPURL);
    this.setColour(Blockly.Blocks.huskylens.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.HUSKYLENS_READ_NOW);
    this.setInputsInline(!0);
    this.setOutput(!0,"Boolean");
    this.setTooltip(Blockly.Msg.HUSKYLENS_TOOLTIP)
  }
};

Blockly.Blocks.huskylens_get_data_block={
  init:function() {
    this.setHelpUrl(Blockly.Msg.HUSKYLENS_HELPURL);
    this.setColour(Blockly.Blocks.huskylens.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.GET_DATA_BLOCK)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.B_XCENTER,"XC"],
                                                [Blockly.Msg.B_YCENTER,"YC"],
                                                [Blockly.Msg.B_WIDTH,"BW"],
                                                [Blockly.Msg.B_HEIGHT,"BH"],
                                                [Blockly.Msg.B_ID,"ID"]
                                              ]),"BLOCK_DATA");
    this.setInputsInline(!0);
    this.setOutput(!0,"Number");
    this.setTooltip(Blockly.Msg.HUSKYLENS_TOOLTIP)
  }
};

Blockly.Blocks.huskylens_get_data_arrow={
  init:function() {
    this.setHelpUrl(Blockly.Msg.HUSKYLENS_HELPURL);
    this.setColour(Blockly.Blocks.huskylens.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.GET_DATA_ARROW)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.A_XORIGIN,"XO"],
                                                [Blockly.Msg.A_YORIGIN,"YO"],
                                                [Blockly.Msg.A_XTARGET,"XT"],
                                                [Blockly.Msg.A_YTARGET,"YT"],
                                                [Blockly.Msg.A_ID_,"ID"]
                                              ]),"ARROW_DATA");
    this.setInputsInline(!0);
    this.setOutput(!0,"Number");
    this.setTooltip(Blockly.Msg.HUSKYLENS_TOOLTIP)
  }
};

Blockly.Blocks.huskylens_show_text={
  init:function(){
    this.setHelpUrl(Blockly.Msg.HUSKYLENS_HELPURL);
    this.setColour(Blockly.Blocks.huskylens.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.HUSKYLENS_SHOWTEXT);
    this.appendValueInput("show_text")
        .setCheck("String");
    this.appendDummyInput()
        .appendField(Blockly.Msg.HUSKYLENS_XAXIS);
    this.appendValueInput("x_axis")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(Blockly.Msg.HUSKYLENS_YAXIS);
    this.appendValueInput("y_axis")
        .setCheck("Number");
    this.setInputsInline(!0);
    this.setPreviousStatement(!0,null);
    this.setNextStatement(!0,null);
    this.setTooltip(Blockly.Msg.HUSKYLENS_TOOLTIP)
  }
};

Blockly.Blocks.huskylens_clear_screen={
  init:function() {
    this.setHelpUrl(Blockly.Msg.HUSKYLENS_HELPURL);
    this.setColour(Blockly.Blocks.huskylens.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.HUSKYLENS_CLEAR_SCREEN);
    this.setInputsInline(!0);
    this.setPreviousStatement(!0,null);
    this.setNextStatement(!0,null);
    this.setTooltip(Blockly.Msg.HUSKYLENS_TOOLTIP)
  }
};

Blockly.Blocks.huskylens_count_learned={
  init:function() {
    this.setHelpUrl(Blockly.Msg.HUSKYLENS_HELPURL);
    this.setColour(Blockly.Blocks.huskylens.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.HUSKYLENS_COUNT_LEARNED);
    this.setInputsInline(!0);
    this.setOutput(!0,"Number");
    this.setTooltip(Blockly.Msg.HUSKYLENS_TOOLTIP)
  }
};

Blockly.Blocks.huskylens_count_all_learned={
  init:function() {
    this.setHelpUrl(Blockly.Msg.HUSKYLENS_HELPURL);
    this.setColour(Blockly.Blocks.huskylens.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.HUSKYLENS_COUNT_ALL_LEARNED);
    this.setInputsInline(!0);
    this.setOutput(!0,"Number");
    this.setTooltip(Blockly.Msg.HUSKYLENS_TOOLTIP)
  }
};

Blockly.Blocks.huskylens_write_learn={
  init:function(){
    this.setHelpUrl(Blockly.Msg.HUSKYLENS_HELPURL);
    this.setColour(Blockly.Blocks.huskylens.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.HUSKYLENS_WRITE_LEARN);
    this.appendValueInput("learn_id")
        .setCheck("Number");
    this.setInputsInline(!0);
    this.setPreviousStatement(!0,null);
    this.setNextStatement(!0,null);
    this.setTooltip(Blockly.Msg.HUSKYLENS_TOOLTIP)
  }
};

Blockly.Blocks.huskylens_write_forget={
  init:function() {
    this.setHelpUrl(Blockly.Msg.HUSKYLENS_HELPURL);
    this.setColour(Blockly.Blocks.huskylens.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.HUSKYLENS_WRITE_FORGET);
    this.setInputsInline(!0);
    this.setPreviousStatement(!0,null);
    this.setNextStatement(!0,null);
    this.setTooltip(Blockly.Msg.HUSKYLENS_TOOLTIP)
  }
};

Blockly.Blocks.huskylens_learned_id={
  init:function() {
    this.setHelpUrl(Blockly.Msg.HUSKYLENS_HELPURL);
    this.setColour(Blockly.Blocks.huskylens.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.HUSKYLENS_LEARNED_ID);
    this.appendValueInput("learned_id")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(Blockly.Msg.HUSKYLENS_LEARNED_ID2);
    this.setInputsInline(!0);
    this.setOutput(!0,"Boolean");
    this.setTooltip(Blockly.Msg.HUSKYLENS_TOOLTIP)
  }
};

Blockly.Blocks.huskylens_set_id_name={
  init:function(){
    this.setHelpUrl(Blockly.Msg.HUSKYLENS_HELPURL);
    this.setColour(Blockly.Blocks.huskylens.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.HUSKYLENS_SET_ID);
    this.appendValueInput("set_id")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(Blockly.Msg.HUSKYLENS_SET_NAME);
    this.appendValueInput("set_name")
        .setCheck("String");
    this.setInputsInline(!0);
    this.setPreviousStatement(!0,null);
    this.setNextStatement(!0,null);
    this.setTooltip(Blockly.Msg.HUSKYLENS_TOOLTIP)
  }
};

Blockly.Blocks.huskylens_save_picture_to_sd={
  init:function() {
    this.setHelpUrl(Blockly.Msg.HUSKYLENS_HELPURL);
    this.setColour(Blockly.Blocks.huskylens.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.HUSKYLENS_SAVE_PICTURE_SD);
    this.setInputsInline(!0);
    this.setPreviousStatement(!0,null);
    this.setNextStatement(!0,null);
    this.setTooltip(Blockly.Msg.HUSKYLENS_TOOLTIP)
  }
};

Blockly.Blocks.huskylens_sl_model_to_sd={
  init:function(){
    this.setHelpUrl(Blockly.Msg.HUSKYLENS_HELPURL);
    this.setColour(Blockly.Blocks.huskylens.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.HUSKYLENS_SG_MODEL_SD);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.MODE_SAVE,"SAVE"],
                                                [Blockly.Msg.MODE_LOAD,"LOAD"]
                                              ]),"MODEL_CHOOSE");
    this.appendDummyInput()
        .appendField(Blockly.Msg.HUSKYLENS_CHOOSE_ID);
    this.appendValueInput("choose_id")
        .setCheck("Number");
    this.setInputsInline(!0);
    this.setPreviousStatement(!0,null);
    this.setNextStatement(!0,null);
    this.setTooltip(Blockly.Msg.HUSKYLENS_TOOLTIP)
  }
};

// PIXETTO
Blockly.Blocks.pixetto={};
Blockly.Blocks.pixetto.HUE=240;
Blockly.Blocks.pixetto.HUE1=270;
Blockly.Blocks.pixetto_uart_init={
  init:function() {
    this.setHelpUrl(Blockly.Msg.PIXETTO_HELPURL);
    this.setColour(Blockly.Blocks.pixetto.HUE1);
    this.appendDummyInput()
        .appendField(Blockly.Msg.PIXETTO_UART_INIT);
    this.appendDummyInput()
        .appendField("RX")
        //.appendField(new Blockly.FieldDropdown([["2","2"],["3","3"]]),"RX_PIN");
	.appendField(new Blockly.FieldDropdown(profile["default"].digital),"RX_PIN");
    this.appendDummyInput()
        .appendField("TX")
        .appendField(new Blockly.FieldDropdown(profile["default"].digital),"TX_PIN");
    this.appendDummyInput()
        .appendField(Blockly.Msg.PIXETTO_UART_INIT2);
    this.setInputsInline(!0);
    this.setPreviousStatement(!0,null);
    this.setNextStatement(!0,null);
    this.setTooltip(Blockly.Msg.PIXETTO_TOOLTIP)
  }
};

Blockly.Blocks.pixetto_mode_setting={
  init:function() {
    this.setHelpUrl(Blockly.Msg.PIXETTO_HELPURL);
    this.setColour(Blockly.Blocks.pixetto.HUE1);
    this.appendDummyInput()
        .appendField(Blockly.Msg.PIXETTO_MODE_SETTING)
				.appendField(new Blockly.FieldDropdown([[Blockly.Msg.PIXETTO_FUNC_COLOR_DETECTION,"1"],
                                                [Blockly.Msg.PIXETTO_FUNC_COLOR_CODE_DETECTION,"2"],
                                                [Blockly.Msg.PIXETTO_FUNC_SHAPE_DETECTION,"3"],
                                                [Blockly.Msg.PIXETTO_FUNC_SPHERE_DETECTION,"4"],
                                                [Blockly.Msg.PIXETTO_FUNC_TEMPLATE_MATCHING,"6"],
																								[Blockly.Msg.PIXETTO_FUNC_KEYPOINTS,"8"],
                                                [Blockly.Msg.PIXETTO_FUNC_NEURAL_NETWORK,"9"],
																								[Blockly.Msg.PIXETTO_FUNC_APRILTAG,"10"],
																								[Blockly.Msg.PIXETTO_FUNC_FACE_DETECTION,"11"],
																								[Blockly.Msg.PIXETTO_FUNC_TRAFFIC_SIGN_DETECTION,"12"],
																								[Blockly.Msg.PIXETTO_FUNC_HANDWRITTEN_DIGITS_DETECTION,"13"],
																								[Blockly.Msg.PIXETTO_FUNC_HANDWRITTEN_LETTERS_DETECTION,"14"],
																								[Blockly.Msg.PIXETTO_FUNC_CLOUD_DETECTION,"15"],
																								[Blockly.Msg.PIXETTO_FUNC_LANES_DETECTION,"16"],
																								[Blockly.Msg.PIXETTO_FUNC_EQUATION_DETECTION,"17"],
																								[Blockly.Msg.PIXETTO_FUNC_SIMPLE_CLASSIFIER,"18"],
																								[Blockly.Msg.PIXETTO_FUNC_VOICE_COMMAND,"19"]
                                              ]),"PIXETTO_MODE");
    this.setInputsInline(!0);
    this.setPreviousStatement(!0,null);
    this.setNextStatement(!0,null);
    this.setTooltip(Blockly.Msg.PIXETTO_TOOLTIP)
  }
};

Blockly.Blocks.pixetto_is_detection={
  init:function() {
    this.setHelpUrl(Blockly.Msg.PIXETTO_HELPURL);
    this.setColour(Blockly.Blocks.pixetto.HUE1);
    this.appendDummyInput()
        .appendField(Blockly.Msg.PIXETTO_IS_DETECTION);
    this.setInputsInline(!0);
    this.setOutput(!0,"Boolean");
    this.setTooltip(Blockly.Msg.PIXETTO_TOOLTIP)
  }
};

Blockly.Blocks.pixetto_count_object={
  init:function() {
    this.setHelpUrl(Blockly.Msg.PIXETTO_HELPURL);
    this.setColour(Blockly.Blocks.pixetto.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.PIXETTO_COUNT_OBJECT);
    this.setInputsInline(!0);
    this.setOutput(!0,"Number");
    this.setTooltip(Blockly.Msg.PIXETTO_TOOLTIP)
  }
};

Blockly.Blocks.pixetto_color_detects={
  init:function() {
    this.setHelpUrl(Blockly.Msg.PIXETTO_HELPURL);
    this.setColour(Blockly.Blocks.pixetto.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.PIXETTO_COLOR_DETECTS)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PIXETTO_RED,"PIXETTO_RED"],
                                                [Blockly.Msg.PIXETTO_YELLOW,"PIXETTO_YELLOW"],
                                                [Blockly.Msg.PIXETTO_GREEN,"PIXETTO_GREEN"],
                                                [Blockly.Msg.PIXETTO_BLUE,"PIXETTO_BLUE"],
                                                [Blockly.Msg.PIXETTO_PURPLE,"PIXETTO_PURPLE"],
                                                [Blockly.Msg.PIXETTO_BLACK,"PIXETTO_BLACK"]
                                              ]),"PIXETTO_COLOR");
    this.setInputsInline(!0);
    this.setOutput(!0,"Boolean");
    this.setTooltip(Blockly.Msg.PIXETTO_TOOLTIP)
  }
};

Blockly.Blocks.pixetto_shape_detects={
  init:function() {
    this.setHelpUrl(Blockly.Msg.PIXETTO_HELPURL);
    this.setColour(Blockly.Blocks.pixetto.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.PIXETTO_SHAPE_DETECTS)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PIXETTO_CIRCLE,"PIXETTO_CIRCLE"],
                                                [Blockly.Msg.PIXETTO_RECTANGLE,"PIXETTO_RECTANGLE"],
                                                [Blockly.Msg.PIXETTO_TRIANGLE,"PIXETTO_TRIANGLE"],
                                                [Blockly.Msg.PIXETTO_PENTAGON,"PIXETTO_PENTAGON"]
                                              ]),"PIXETTO_SHAPE");
    this.setInputsInline(!0);
    this.setOutput(!0,"Boolean");
    this.setTooltip(Blockly.Msg.PIXETTO_TOOLTIP)
  }
};

Blockly.Blocks.pixetto_sphere_detects={
  init:function() {
    this.setHelpUrl(Blockly.Msg.PIXETTO_HELPURL);
    this.setColour(Blockly.Blocks.pixetto.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.PIXETTO_SPHERE_DETECTS)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PIXETTO_RED,"PIXETTO_RED"],
                                                [Blockly.Msg.PIXETTO_YELLOW,"PIXETTO_YELLOW"],
                                                [Blockly.Msg.PIXETTO_GREEN,"PIXETTO_GREEN"],
                                                [Blockly.Msg.PIXETTO_BLUE,"PIXETTO_BLUE"],
                                                [Blockly.Msg.PIXETTO_PURPLE,"PIXETTO_PURPLE"],
                                                [Blockly.Msg.PIXETTO_BLACK,"PIXETTO_BLACK"]
                                              ]),"PIXETTO_SPHERE");
    this.setInputsInline(!0);
    this.setOutput(!0,"Boolean");
    this.setTooltip(Blockly.Msg.PIXETTO_TOOLTIP)
  }
};

Blockly.Blocks.pixetto_template_matching_detects={
  init:function() {
    this.setHelpUrl(Blockly.Msg.PIXETTO_HELPURL);
    this.setColour(Blockly.Blocks.pixetto.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.PIXETTO_TEMPLATE_DETECTS)
        .appendField(new Blockly.FieldDropdown([["1","1"],["2","2"],["3","3"]]),"PIXETTO_TEMPLATE");
    this.setInputsInline(!0);
    this.setOutput(!0,"Boolean");
    this.setTooltip(Blockly.Msg.PIXETTO_TOOLTIP)
  }
};

Blockly.Blocks.pixetto_keypoint_detects={
  init:function() {
    this.setHelpUrl(Blockly.Msg.PIXETTO_HELPURL);
    this.setColour(Blockly.Blocks.pixetto.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.PIXETTO_KEYPOINT_DETECTS)
        .appendField(new Blockly.FieldDropdown([["1","1"],["2","2"],["3","3"]]),"PIXETTO_KEYPOINT");
    this.setInputsInline(!0);
    this.setOutput(!0,"Boolean");
    this.setTooltip(Blockly.Msg.PIXETTO_TOOLTIP)
  }
};

Blockly.Blocks.pixetto_neural_detects={
  init:function() {
    this.setHelpUrl(Blockly.Msg.PIXETTO_HELPURL);
    this.setColour(Blockly.Blocks.pixetto.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.PIXETTO_NEURAL_DETECTS);
    this.appendValueInput("neural_count")
        .setCheck("Number");
    this.setInputsInline(!0);
    this.setOutput(!0,"Boolean");
    this.setTooltip(Blockly.Msg.PIXETTO_TOOLTIP)
  }
};

Blockly.Blocks.pixetto_traffic_detects={
  init:function() {
    this.setHelpUrl(Blockly.Msg.PIXETTO_HELPURL);
    this.setColour(Blockly.Blocks.pixetto.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.PIXETTO_TRAFFIC_DETECTS)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PIXETTO_SIGN_NO_ENTRE,"PIXETTO_SIGN_NO_ENTRE"],
                                                [Blockly.Msg.PIXETTO_SIGN_NO_LEFT_TURN,"PIXETTO_SIGN_NO_LEFT_TURN"],
                                                [Blockly.Msg.PIXETTO_SIGN_NO_RIGHT_TURN,"PIXETTO_SIGN_NO_RIGHT_TURN"],
                                                [Blockly.Msg.PIXETTO_SIGN_WRONG_WAY,"PIXETTO_SIGN_WRONG_WAY"],
                                                [Blockly.Msg.PIXETTO_SIGN_NO_U_TURN,"PIXETTO_SIGN_NO_U_TURN"],
                                                [Blockly.Msg.PIXETTO_SIGN_MAX_SPEED,"PIXETTO_SIGN_MAX_SPEED"],
                                                [Blockly.Msg.PIXETTO_SIGN_ONEWAY_TRAFFIC,"PIXETTO_SIGN_ONEWAY_TRAFFIC"],
                                                [Blockly.Msg.PIXETTO_SIGN_LEFT_TURN,"PIXETTO_SIGN_LEFT_TURN"],
                                                [Blockly.Msg.PIXETTO_SIGN_RIGHT_TURN,"PIXETTO_SIGN_RIGHT_TURN"],
                                                [Blockly.Msg.PIXETTO_SIGN_MIN_SPEED,"PIXETTO_SIGN_MIN_SPEED"],
                                                [Blockly.Msg.PIXETTO_SIGN_U_TURN,"PIXETTO_SIGN_U_TURN"],
                                                [Blockly.Msg.PIXETTO_SIGN_TUNNEL_AHEAD,"PIXETTO_SIGN_TUNNEL_AHEAD"],
                                                [Blockly.Msg.PIXETTO_SIGN_BEWARE_OF_CHILDREN,"PIXETTO_SIGN_BEWARE_OF_CHILDREN"],
                                                [Blockly.Msg.PIXETTO_SIGN_ROUNDABOUT,"PIXETTO_SIGN_ROUNDABOUT"],
                                                [Blockly.Msg.PIXETTO_SIGN_YIELD_TO_PEDESTRIAN,"PIXETTO_SIGN_YIELD_TO_PEDESTRIAN"],
                                                [Blockly.Msg.PIXETTO_SIGN_RED_LIGHT,"PIXETTO_SIGN_RED_LIGHT"],
                                                [Blockly.Msg.PIXETTO_SIGN_GREEN_LIGHT,"PIXETTO_SIGN_GREEN_LIGHT"]
                                              ]),"PIXETTO_SIGN");
    this.setInputsInline(!0);
    this.setOutput(!0,"Boolean");
    this.setTooltip(Blockly.Msg.PIXETTO_TOOLTIP)
  }
};

Blockly.Blocks.pixetto_apriltag_detects={
  init:function() {
    this.setHelpUrl(Blockly.Msg.PIXETTO_HELPURL);
    this.setColour(Blockly.Blocks.pixetto.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.PIXETTO_APRILTAG_DETECTS)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PIXETTO_APRILTAG_TYPE,"PIXETTO_APRILTAG_TYPE"],
                                                [Blockly.Msg.PIXETTO_APRILTAG_POSX,"PIXETTO_APRILTAG_POSX"],
                                                [Blockly.Msg.PIXETTO_APRILTAG_POSY,"PIXETTO_APRILTAG_POSY"],
                                                [Blockly.Msg.PIXETTO_APRILTAG_POSZ,"PIXETTO_APRILTAG_POSZ"],
                                                [Blockly.Msg.PIXETTO_APRILTAG_ROTX,"PIXETTO_APRILTAG_ROTX"],
                                                [Blockly.Msg.PIXETTO_APRILTAG_ROTY,"PIXETTO_APRILTAG_ROTY"],
                                                [Blockly.Msg.PIXETTO_APRILTAG_ROTZ,"PIXETTO_APRILTAG_ROTZ"],
                                                [Blockly.Msg.PIXETTO_APRILTAG_CENX,"PIXETTO_APRILTAG_CENX"],
                                                [Blockly.Msg.PIXETTO_APRILTAG_CENY,"PIXETTO_APRILTAG_CENY"]
                                              ]),"PIXETTO_APRILTAG");
    this.setInputsInline(!0);
    this.setOutput(!0,"Number");
    this.setTooltip(Blockly.Msg.PIXETTO_TOOLTIP)
  }
};

Blockly.Blocks.pixetto_lanes_detection={
  init:function() {
    this.setHelpUrl(Blockly.Msg.PIXETTO_HELPURL);
    this.setColour(Blockly.Blocks.pixetto.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.PIXETTO_LANES_DETECTION)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PIXETTO_LANES_GX,"PIXETTO_LANES_GX"],
                                                [Blockly.Msg.PIXETTO_LANES_GY,"PIXETTO_LANES_GY"],
                                                [Blockly.Msg.PIXETTO_LANES_LX1,"PIXETTO_LANES_LX1"],
                                                [Blockly.Msg.PIXETTO_LANES_LY1,"PIXETTO_LANES_LY1"],
                                                [Blockly.Msg.PIXETTO_LANES_LX2,"PIXETTO_LANES_LX2"],
                                                [Blockly.Msg.PIXETTO_LANES_LY2,"PIXETTO_LANES_LY2"],
                                                [Blockly.Msg.PIXETTO_LANES_RX1,"PIXETTO_LANES_RX1"],
                                                [Blockly.Msg.PIXETTO_LANES_RY1,"PIXETTO_LANES_RY1"],
                                                [Blockly.Msg.PIXETTO_LANES_RX2,"PIXETTO_LANES_RX2"],
                                                [Blockly.Msg.PIXETTO_LANES_RY2,"PIXETTO_LANES_RY2"]
                                              ]),"PIXETTO_LANES_DETECTION");
    this.setInputsInline(!0);
    this.setOutput(!0,"Number");
    this.setTooltip(Blockly.Msg.PIXETTO_TOOLTIP)
  }
};

Blockly.Blocks.pixetto_object_detail={
  init:function() {
    this.setHelpUrl(Blockly.Msg.PIXETTO_HELPURL);
    this.setColour(Blockly.Blocks.pixetto.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.PIXETTO_OBJECT_DETAIL)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PIXETTO_OBJECT_TYPE,"PIXETTO_OBJECT_TYPE"],
                                                [Blockly.Msg.PIXETTO_OBJECT_X,"PIXETTO_OBJECT_X"],
                                                [Blockly.Msg.PIXETTO_OBJECT_Y,"PIXETTO_OBJECT_Y"],
                                                [Blockly.Msg.PIXETTO_OBJECT_W,"PIXETTO_OBJECT_W"],
                                                [Blockly.Msg.PIXETTO_OBJECT_H,"PIXETTO_OBJECT_H"]
                                              ]),"PIXETTO_OBJECT_DETAIL");
    this.setInputsInline(!0);
    this.setOutput(!0,"Number");
    this.setTooltip(Blockly.Msg.PIXETTO_TOOLTIP)
  }
};


Blockly.Blocks.pixetto_handwritten_digits={
  init:function() {
    this.setHelpUrl(Blockly.Msg.PIXETTO_HELPURL);
    this.setColour(Blockly.Blocks.pixetto.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.PIXETTO_HANDWRITTEN_DIGITS)
        .appendField(new Blockly.FieldDropdown([["0","0"],["1","1"],["2","2"],["3","3"],["4","4"],
                                                ["5","5"],["6","6"],["7","7"],["8","8"],["9","9"]]),"PIXETTO_HAND_DIGITS");
    this.setInputsInline(!0);
    this.setOutput(!0,"Boolean");
    this.setTooltip(Blockly.Msg.PIXETTO_TOOLTIP)
  }
};

Blockly.Blocks.pixetto_handwritten_letters={
  init:function() {
    this.setHelpUrl(Blockly.Msg.PIXETTO_HELPURL);
    this.setColour(Blockly.Blocks.pixetto.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.PIXETTO_HANDWRITTEN_LETTERS)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PIXETTO_LETTER_A,"LETTER_A"],
                                                [Blockly.Msg.PIXETTO_LETTER_B,"LETTER_B"],
                                                [Blockly.Msg.PIXETTO_LETTER_C,"LETTER_C"],
                                                [Blockly.Msg.PIXETTO_LETTER_D,"LETTER_D"],
                                                [Blockly.Msg.PIXETTO_LETTER_E,"LETTER_E"],
                                                [Blockly.Msg.PIXETTO_LETTER_F,"LETTER_F"],
                                                [Blockly.Msg.PIXETTO_LETTER_G,"LETTER_G"],
                                                [Blockly.Msg.PIXETTO_LETTER_H,"LETTER_H"],
                                                [Blockly.Msg.PIXETTO_LETTER_I,"LETTER_I"],
                                                [Blockly.Msg.PIXETTO_LETTER_J,"LETTER_J"],
                                                [Blockly.Msg.PIXETTO_LETTER_K,"LETTER_K"],
                                                [Blockly.Msg.PIXETTO_LETTER_L,"LETTER_L"],
                                                [Blockly.Msg.PIXETTO_LETTER_M,"LETTER_M"],
                                                [Blockly.Msg.PIXETTO_LETTER_N,"LETTER_N"],
                                                [Blockly.Msg.PIXETTO_LETTER_O,"LETTER_O"],
                                                [Blockly.Msg.PIXETTO_LETTER_P,"LETTER_P"],
                                                [Blockly.Msg.PIXETTO_LETTER_Q,"LETTER_Q"],
                                                [Blockly.Msg.PIXETTO_LETTER_R,"LETTER_R"],
                                                [Blockly.Msg.PIXETTO_LETTER_S,"LETTER_S"],
                                                [Blockly.Msg.PIXETTO_LETTER_T,"LETTER_T"],
                                                [Blockly.Msg.PIXETTO_LETTER_U,"LETTER_U"],
                                                [Blockly.Msg.PIXETTO_LETTER_V,"LETTER_V"],
                                                [Blockly.Msg.PIXETTO_LETTER_W,"LETTER_W"],
                                                [Blockly.Msg.PIXETTO_LETTER_X,"LETTER_X"],
                                                [Blockly.Msg.PIXETTO_LETTER_Y,"LETTER_Y"],
                                                [Blockly.Msg.PIXETTO_LETTER_Z,"LETTER_Z"]
                                              ]),"PIXETTO_HAND_LETTERS");
    this.setInputsInline(!0);
    this.setOutput(!0,"Boolean");
    this.setTooltip(Blockly.Msg.PIXETTO_TOOLTIP)
  }
};

Blockly.Blocks.pixetto_remote_computing_detects={
  init:function() {
    this.setHelpUrl(Blockly.Msg.PIXETTO_HELPURL);
    this.setColour(Blockly.Blocks.pixetto.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.PIXETTO_COMPUTING_DETECTS);
    this.appendValueInput("computing_count")
        .setCheck("Number");
    this.setInputsInline(!0);
    this.setOutput(!0,"Boolean");
    this.setTooltip(Blockly.Msg.PIXETTO_TOOLTIP)
  }
};

Blockly.Blocks.pixetto_remote_classifier_detects={
  init:function() {
    this.setHelpUrl(Blockly.Msg.PIXETTO_HELPURL);
    this.setColour(Blockly.Blocks.pixetto.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.PIXETTO_CLASSIFIER_DETECTS);
    this.appendValueInput("classifier_count")
        .setCheck("Number");
    this.setInputsInline(!0);
    this.setOutput(!0,"Boolean");
    this.setTooltip(Blockly.Msg.PIXETTO_TOOLTIP)
  }
};

Blockly.Blocks.pixetto_voice_command_detects={
  init:function() {
    this.setHelpUrl(Blockly.Msg.PIXETTO_HELPURL);
    this.setColour(Blockly.Blocks.pixetto.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.PIXETTO_VOICE_COMMAND_DETECTS)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PIXETTO_VOICE_Hello,"VOICE_Hello"],
                                                [Blockly.Msg.PIXETTO_VOICE_Thanks,"VOICE_Thanks"],
                                                [Blockly.Msg.PIXETTO_VOICE_Bye,"VOICE_Bye"],
                                                [Blockly.Msg.PIXETTO_VOICE_WhatsThis,"VOICE_WhatsThis"],
                                                [Blockly.Msg.PIXETTO_VOICE_WhatTime,"VOICE_WhatTime"],
                                                [Blockly.Msg.PIXETTO_VOICE_HowOld,"VOICE_HowOld"],
                                                [Blockly.Msg.PIXETTO_VOICE_WhatDay,"VOICE_WhatDay"],
                                                [Blockly.Msg.PIXETTO_VOICE_TellStory,"VOICE_TellStory"],
                                                [Blockly.Msg.PIXETTO_VOICE_TellJoke,"VOICE_TellJoke"],
                                                [Blockly.Msg.PIXETTO_VOICE_ReadPoem,"VOICE_ReadPoem"],
                                                [Blockly.Msg.PIXETTO_VOICE_TurnOnLight,"VOICE_TurnOnLight"],
                                                [Blockly.Msg.PIXETTO_VOICE_TurnOffLight,"VOICE_TurnOffLight"],
                                                [Blockly.Msg.PIXETTO_VOICE_TurnLeft,"VOICE_TurnLeft"],
                                                [Blockly.Msg.PIXETTO_VOICE_TurnRight,"VOICE_TurnRight"],
                                                [Blockly.Msg.PIXETTO_VOICE_GoAhead,"VOICE_GoAhead"],
                                                [Blockly.Msg.PIXETTO_VOICE_MoveBack,"VOICE_MoveBack"],
                                                [Blockly.Msg.PIXETTO_VOICE_Stop,"VOICE_Stop"],
                                                [Blockly.Msg.PIXETTO_VOICE_Open,"VOICE_Open"],
                                                [Blockly.Msg.PIXETTO_VOICE_Close,"VOICE_Close"],
                                                [Blockly.Msg.PIXETTO_VOICE_OpenEyes1,"VOICE_OpenEyes1"],
                                                [Blockly.Msg.PIXETTO_VOICE_OpenEyes2,"VOICE_OpenEyes2"],
                                                [Blockly.Msg.PIXETTO_VOICE_CloseEyes1,"VOICE_CloseEyes1"],
                                                [Blockly.Msg.PIXETTO_VOICE_CloseEyes2,"VOICE_CloseEyes2"],
                                                [Blockly.Msg.PIXETTO_VOICE_Jump,"VOICE_Jump"],
                                                [Blockly.Msg.PIXETTO_VOICE_StandUp,"VOICE_StandUp"],
                                                [Blockly.Msg.PIXETTO_VOICE_SquatDown,"VOICE_SquatDown"]
                                              ]),"PIXETTO_VOICE_DETECTS");
    this.setInputsInline(!0);
    this.setOutput(!0,"Boolean");
    this.setTooltip(Blockly.Msg.PIXETTO_TOOLTIP)
  }
};

// EZ Start Kit Q
Blockly.Blocks.ez_start_kit_q={};
Blockly.Blocks.ez_start_kit_q.HUE1=330;
Blockly.Blocks.ez_start_kit_q_pca9685_init={
  init:function(){
    this.setHelpUrl(Blockly.Msg.EZ_HELPURL);
    this.setColour(Blockly.Blocks.ez_start_kit_q.HUE1);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ez_start_kit_q_pca9685_init);
    this.setInputsInline(!0);
    this.setPreviousStatement(!0,null);
    this.setNextStatement(!0,null);
    this.setTooltip(Blockly.Msg.EZ_TOOLTIP)
  }
};

Blockly.Blocks.ez_start_kit_q_motor={
  init:function(){
    this.setHelpUrl(Blockly.Msg.EZ_HELPURL);
    this.setColour(Blockly.Blocks.ez_start_kit_q.HUE1);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ez_start_kit_q_motor)
        .appendField(new Blockly.FieldDropdown([["M1","M1"],["M2","M2"],["M3","M3"],["M4","M4"]]),"MotorChoose");
    this.appendDummyInput()
        .appendField(Blockly.Msg.ez_start_kit_q_speed);
    this.appendValueInput("MOTOR")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(Blockly.Msg.ez_start_kit_q_range);
    this.setInputsInline(!0);
    this.setPreviousStatement(!0,null);
    this.setNextStatement(!0,null);
    this.setTooltip(Blockly.Msg.EZ_TOOLTIP)
  }
};

Blockly.Blocks.ez_start_kit_q_servo_init={
  init:function(){
    this.setHelpUrl(Blockly.Msg.EZ_HELPURL);
    this.setColour(Blockly.Blocks.ez_start_kit_q.HUE1);
    this.appendDummyInput()
        .appendField(Blockly.Msg.servo_pulse_min);
    this.appendValueInput("pulse_min")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(Blockly.Msg.servo_pulse_max);
    this.appendValueInput("pulse_max")
        .setCheck("Number");
    this.setInputsInline(!0);
    this.setPreviousStatement(!0,null);
    this.setNextStatement(!0,null);
    this.setTooltip(Blockly.Msg.EZ_TOOLTIP)
  }
};

Blockly.Blocks.ez_start_kit_q_servo_write={
  init:function(){
    this.setHelpUrl(Blockly.Msg.EZ_HELPURL);
    this.setColour(Blockly.Blocks.ez_start_kit_q.HUE1);
    this.appendDummyInput()
        .appendField(Blockly.Msg.servo_channel)
        .appendField(new Blockly.FieldDropdown([["1","1"],["2","2"],["3","3"],["4","4"],["5","5"],["6","6"],["7","7"],["8","8"]]),"ServoChoose");
    this.appendDummyInput()
        .appendField(Blockly.Msg.servo_degree);
    this.appendValueInput("Degree")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("(0~180)");
    this.setInputsInline(!0);
    this.setPreviousStatement(!0,null);
    this.setNextStatement(!0,null);
    this.setTooltip(Blockly.Msg.EZ_TOOLTIP)
  }
};

// apollo
Blockly.Blocks.apollo={};
Blockly.Blocks.apollo.HUE0 = 0;
Blockly.Blocks.apollo.HUE1 = 40;
Blockly.Blocks.apollo.HUE2 = 80;
Blockly.Blocks.apollo.HUE3 = 120;
Blockly.Blocks.apollo.HUE4 = 270;
Blockly.Blocks.apollo.HUE5 = 200;
Blockly.Blocks.apollo.HUE6 = 240;
Blockly.Blocks.apollo.HUE7 = 360;
Blockly.Blocks.apollo.HUE8 = 320;
Blockly.Blocks.apollo_factory={
  init:function(){
    this.setHelpUrl(Blockly.Msg.APOLLO_HELPURL);
    this.setColour(Blockly.Blocks.apollo.HUE0);
    this.appendDummyInput()
        .appendField(Blockly.Msg.APOLLO_FACTORY);
    this.setInputsInline(!0);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.APOLLO_TOOLTIP)
  }
};
Blockly.Blocks.apollo_factory_game={
  init:function(){
    this.setHelpUrl(Blockly.Msg.APOLLO_HELPURL);
    this.setColour(Blockly.Blocks.apollo.HUE0);
    this.appendDummyInput()
        .appendField(Blockly.Msg.APOLLO_FACTORY_GAME)
        .appendField(new Blockly.FieldDropdown([["P3","4"],["P9","7"]]),"blueChoose1");
    this.appendDummyInput()
        .appendField(Blockly.Msg.APOLLO_FACTORY_GAME2)
        .appendField(new Blockly.FieldDropdown([["P9","7"],["P3","4"]]),"blueChoose2");
    this.appendValueInput("board_rate")
        .appendField(Blockly.Msg.APOLLO_BT_SET_RATE)
        .setCheck("Number");
    this.appendValueInput("white_r")
        .appendField(Blockly.Msg.APOLLO_white_SET_R)
        .setCheck("Number");
    this.appendValueInput("white_g")
        .appendField(Blockly.Msg.APOLLO_white_SET_G)
        .setCheck("Number");
    this.appendValueInput("white_b")
        .appendField(Blockly.Msg.APOLLO_white_SET_B)
        .setCheck("Number");
    this.appendValueInput("white_range")
        .appendField(Blockly.Msg.APOLLO_white_SET_RANGE)
        .setCheck("Number");
    this.setInputsInline(!0);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.APOLLO_TOOLTIP)
  }
};
Blockly.Blocks.apollo_factory_remote={
  init:function(){
    this.setHelpUrl(Blockly.Msg.APOLLO_HELPURL);
    this.setColour(Blockly.Blocks.apollo.HUE0);
    this.appendDummyInput()
        .appendField(Blockly.Msg.APOLLO_FACTORY_REMOTE)
        .appendField(new Blockly.FieldDropdown([["P3","4"],["P9","7"]]),"blueChoose1");
    this.appendDummyInput()
        .appendField(Blockly.Msg.APOLLO_FACTORY_REMOTE2)
        .appendField(new Blockly.FieldDropdown([["P9","7"],["P3","4"]]),"blueChoose2");
    this.appendValueInput("board_rate")
        .appendField(Blockly.Msg.APOLLO_BT_SET_RATE)
        .setCheck("Number");
    this.setInputsInline(!0);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.APOLLO_TOOLTIP)
  }
};
Blockly.Blocks.apollo_move_car={init:function(){
  this.setHelpUrl(Blockly.Msg.APOLLO_HELPURL);
  this.setColour(Blockly.Blocks.apollo.HUE1);
  this.appendDummyInput()
      .appendField(Blockly.Msg.MOVE_APOLLO)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.FORWARD_,"FORWARD"],[Blockly.Msg.BACKWARD_,"BACKWARD"],[Blockly.Msg.LEFT_,"LEFT"],[Blockly.Msg.RIGHT_,"RIGHT"],[Blockly.Msg.STOP_,"STOP"]]),"STAT");
  this.appendDummyInput()
      .appendField(Blockly.Msg.MOVE_SPEED);
  this.appendValueInput("SPEED")
      .setCheck("Number");
  this.setInputsInline(!0);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
  this.setTooltip(Blockly.Msg.APOLLO_TOOLTIP)}
};
Blockly.Blocks.apollo_move_motor={init:function(){
  this.setHelpUrl(Blockly.Msg.APOLLO_HELPURL);
  this.setColour(Blockly.Blocks.apollo.HUE1);
  this.appendDummyInput()
      .appendField(Blockly.Msg.MOVE_APOLLO_MOTOR_L);
  this.appendValueInput("SPEED_L")
      .setCheck("Number");
  this.appendDummyInput()
      .appendField(Blockly.Msg.MOVE_APOLLO_MOTOR_R);
  this.appendValueInput("SPEED_R")
      .setCheck("Number");
  this.appendDummyInput()
      .appendField("(-255~255)");
  this.setInputsInline(!0);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
  this.setTooltip(Blockly.Msg.APOLLO_TOOLTIP)}
};
Blockly.Blocks.apollo_tracker={init:function(){
  this.setHelpUrl(Blockly.Msg.APOLLO_HELPURL);
  this.setColour(Blockly.Blocks.apollo.HUE2);
  this.appendDummyInput()
      .appendField(Blockly.Msg.TRACKER)
  this.setInputsInline(!0);
  this.setOutput(!0,"Number");
  this.setTooltip(Blockly.Msg.APOLLO_TOOLTIP)}
};
Blockly.Blocks.apollo_sonar={init:function(){
  this.setHelpUrl(Blockly.Msg.APOLLO_HELPURL);
  this.setColour(Blockly.Blocks.apollo.HUE2);
  this.appendDummyInput()
      .appendField(Blockly.Msg.SONAR)
  this.setInputsInline(!0);
  this.setOutput(!0,"Number");
  this.setTooltip(Blockly.Msg.APOLLO_TOOLTIP)}
};
Blockly.Blocks.apollo_button={init:function(){
  this.setHelpUrl(Blockly.Msg.APOLLO_HELPURL);
  this.setColour(Blockly.Blocks.apollo.HUE2);
  this.appendDummyInput()
      .appendField(Blockly.Msg.APOLLO_BUTTON)
  this.setInputsInline(!0);
  this.setOutput(!0,"Boolean");
  this.setTooltip(Blockly.Msg.APOLLO_TOOLTIP)}
};
Blockly.Blocks.apollo_init_tcs={
  init:function(){
    this.setHelpUrl(Blockly.Msg.APOLLO_HELPURL);
    this.setColour(Blockly.Blocks.apollo.HUE3);
    this.appendDummyInput()
        .appendField(Blockly.Msg.INIT_TCS);
    this.appendValueInput("RANGE")
        .setCheck("Number");
    this.setInputsInline(!0);
    this.setPreviousStatement(!0,null);
    this.setNextStatement(!0,null);
    this.setTooltip(Blockly.Msg.APOLLO_TOOLTIP)
  }
};
Blockly.Blocks.apollo_read_tcs={init:function(){
  this.setHelpUrl(Blockly.Msg.APOLLO_HELPURL);
  this.setColour(Blockly.Blocks.apollo.HUE3);
  this.appendDummyInput()
      .appendField(Blockly.Msg.READ_TCS)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.RED,"RED"],[Blockly.Msg.GREEN,"GREEN"],[Blockly.Msg.BLUE,"BLUE"]]),"TCS");
  this.appendDummyInput()
      .appendField(Blockly.Msg.READ_VALUE);
  this.setInputsInline(!0);
  this.setOutput(!0,"Number");
  this.setTooltip(Blockly.Msg.APOLLO_TOOLTIP)}
};
Blockly.Blocks.apollo_flash_light={init:function(){
  this.setHelpUrl(Blockly.Msg.APOLLO_HELPURL);
  this.setColour(Blockly.Blocks.apollo.HUE3);
  this.appendDummyInput()
      .appendField(Blockly.Msg.FLASH_LIGHT)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ON,"ON"],[Blockly.Msg.OFF,"OFF"]]),"TCS_LIGHT");
  this.setInputsInline(!0);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
  this.setTooltip(Blockly.Msg.APOLLO_TOOLTIP)}
};
Blockly.Blocks.apollo_record_tcs={init:function(){
  this.setHelpUrl(Blockly.Msg.APOLLO_HELPURL);
  this.setColour(Blockly.Blocks.apollo.HUE3);
  this.appendDummyInput()
      .appendField(Blockly.Msg.RECORD_TCS)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.RED,"RED"],[Blockly.Msg.GREEN,"GREEN"],[Blockly.Msg.BLUE,"BLUE"],[Blockly.Msg.YELLO,"YELLO"],[Blockly.Msg.AZURE,"AZURE"],[Blockly.Msg.PURPLE,"PURPLE"],[Blockly.Msg.C1,"C1"],[Blockly.Msg.C2,"C2"],[Blockly.Msg.C3,"C3"]]),"RECORD_TCS");
  this.appendDummyInput()
      .appendField(Blockly.Msg.RECORD_VALUE);
  this.setInputsInline(!0);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
  this.setTooltip(Blockly.Msg.APOLLO_TOOLTIP)}
};
Blockly.Blocks.apollo_chack_tcs={init:function(){
  this.setHelpUrl(Blockly.Msg.APOLLO_HELPURL);
  this.setColour(Blockly.Blocks.apollo.HUE3);
  this.appendDummyInput()
      .appendField(Blockly.Msg.CHACK_TCS)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.RED,"RED"],[Blockly.Msg.GREEN,"GREEN"],[Blockly.Msg.BLUE,"BLUE"],[Blockly.Msg.YELLO,"YELLO"],[Blockly.Msg.AZURE,"AZURE"],[Blockly.Msg.PURPLE,"PURPLE"],[Blockly.Msg.C1,"C1"],[Blockly.Msg.C2,"C2"],[Blockly.Msg.C3,"C3"]]),"RECORD_TCS");
  this.appendDummyInput()
      .appendField(Blockly.Msg.CHACK_VALUE);
  this.setInputsInline(!0);
  this.setOutput(!0,"Boolean");
  this.setTooltip(Blockly.Msg.APOLLO_TOOLTIP)}
};
Blockly.Blocks.apollo_neopixel_begin={
  init:function(){
    this.setHelpUrl(Blockly.Msg.APOLLO_HELPURL);
    this.setColour(Blockly.Blocks.apollo.HUE4);
    /*
    this.appendDummyInput()
        .appendField(Blockly.Msg.INITIALIZES_SETUP_APPENDTEXT)
        .appendField(Blockly.Msg.NEOPIXEL_TITLE)
        .appendField(Blockly.Msg.NEOPIXEL_BEGIN_NUM)
        .appendField(new Blockly.FieldTextInput("16"),"NUM");
    this.appendDummyInput()
        .appendField(Blockly.Msg.NEOPIXEL_BEGIN_PIN)
        .appendField(new Blockly.FieldDropdown(profile["default"].digital),"PIN");
    */
    this.appendDummyInput()
        .appendField(Blockly.Msg.EZ_NEOPIXEL_BEGIN_BRIGHTNESS)
    this.appendValueInput("NVALUE")
        .setCheck("Number");
    this.setInputsInline(!0);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.APOLLO_TOOLTIP)},
};
Blockly.Blocks.apollo_oled_display_setting={
  init:function(){
    this.setHelpUrl(Blockly.Msg.APOLLO_HELPURL);
    this.setColour(Blockly.Blocks.apollo.HUE5);
    this.appendDummyInput()
        .appendField(Blockly.Msg.INITIALIZES_SETUP_APPENDTEXT)
        .appendField(Blockly.Msg.OLED_DISPLAY_TITLE)
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.APOLLO_TOOLTIP)}
};
Blockly.Blocks.apollo_oled_display_clear={
  init:function(){
    this.setHelpUrl(Blockly.Msg.APOLLO_HELPURL);
    this.setColour(Blockly.Blocks.apollo.HUE5);
    this.appendDummyInput()
        .appendField(Blockly.Msg.OLED_DISPLAY_TITLE)
        .appendField(Blockly.Msg.OLED_DISPLAY_CLEAR);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.APOLLO_TOOLTIP)}
};
Blockly.Blocks.apollo_oled_display_show={
  init:function(){
    this.setHelpUrl(Blockly.Msg.APOLLO_HELPURL);
    this.setColour(Blockly.Blocks.apollo.HUE5);
    this.appendDummyInput()
        .appendField(Blockly.Msg.OLED_DISPLAY_TITLE)
        .appendField(Blockly.Msg.OLED_DISPLAY_SHOW);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.APOLLO_TOOLTIP)}
};
Blockly.Blocks.apollo_oled_display_draw_commands={
  init:function(){
    this.setHelpUrl(Blockly.Msg.APOLLO_HELPURL);
    this.setColour(Blockly.Blocks.apollo.HUE5);
    this.appendDummyInput()
        .appendField(Blockly.Msg.APOLLO_XAXIS);
    this.appendValueInput("x_axis")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(Blockly.Msg.APOLLO_YAXIS);
    this.appendValueInput("y_axis")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(Blockly.Msg.APOLLO_SHOWTEXT);
    this.appendValueInput("show_text")
        .setCheck("String");
    this.setInputsInline(!0);
    this.setPreviousStatement(!0,null);
    this.setNextStatement(!0,null);
    this.setTooltip(Blockly.Msg.APOLLO_TOOLTIP)
  }
};
Blockly.Blocks.apollo_oled_display_set_font={
  init:function(){
    this.setHelpUrl(Blockly.Msg.APOLLO_HELPURL);
    this.setColour(Blockly.Blocks.apollo.HUE5);
    this.appendDummyInput()
        .appendField(Blockly.Msg.SET_FONT);
    this.appendValueInput("RANGE")
        .setCheck("Number");
    this.setInputsInline(!0);
    this.setPreviousStatement(!0,null);
    this.setNextStatement(!0,null);
    this.setTooltip(Blockly.Msg.APOLLO_TOOLTIP)
  }
};

Blockly.Blocks.apollo_oled_display_set_album2={
  init:function(){
    this.setHelpUrl(Blockly.Msg.APOLLO_HELPURL);
    this.setColour(Blockly.Blocks.apollo.HUE5);
    this.appendDummyInput()
        .appendField(Blockly.Msg.EZ_OLED_DISPLAY_ALBUM_NAME);
    this.appendValueInput("Name")
        .setCheck("String");
    this.appendDummyInput()
        .appendField(Blockly.Msg.EZ_OLED_DISPLAY_ALBUM_XBM);
    this.appendValueInput("Data")
        .setCheck("String");
    this.setInputsInline(!0);
    this.setPreviousStatement(!0,null);
    this.setNextStatement(!0,null);
    this.setTooltip(Blockly.Msg.APOLLO_TOOLTIP)
  }
};

Blockly.Blocks.apollo_oled_display_show_album2={init:function(){
  this.setHelpUrl(Blockly.Msg.APOLLO_HELPURL);
  this.setColour(Blockly.Blocks.apollo.HUE5);
  this.appendDummyInput()
      .appendField(Blockly.Msg.SHOW_ALBUM_NAME);
  this.appendValueInput("Name")
      .setCheck("String");
  this.setInputsInline(!0);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
  this.setTooltip(Blockly.Msg.APOLLO_TOOLTIP)}
};
Blockly.Blocks.apollo_face_show={init:function(){
  this.setHelpUrl(Blockly.Msg.APOLLO_HELPURL);
  this.setColour(Blockly.Blocks.apollo.HUE5);
  this.appendDummyInput()
      .appendField(Blockly.Msg.FACE_SHOW)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.sign_F1,"F1"],[Blockly.Msg.sign_F2,"F2"],[Blockly.Msg.sign_F8,"F8"],[Blockly.Msg.sign_F4,"F4"],[Blockly.Msg.sign_F3,"F3"],[Blockly.Msg.sign_F5,"F5"],[Blockly.Msg.sign_F6,"F6"],[Blockly.Msg.sign_F7,"F7"]]),"SIGN_SHOW");
  this.setInputsInline(!0);
  this.setPreviousStatement(!0,null);
  this.setNextStatement(!0,null);
  this.setTooltip(Blockly.Msg.APOLLO_TOOLTIP)}
};
Blockly.Blocks.apollo_rfid_set={
  init:function(){
    this.setHelpUrl(Blockly.Msg.APOLLO_HELPURL);
    this.setColour(Blockly.Blocks.apollo.HUE6);
    this.appendDummyInput()
        .appendField(Blockly.Msg.APOLLO_RFID_setup_TITLE);
    this.setInputsInline(!0);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.APOLLO_TOOLTIP)
  }
};
Blockly.Blocks.apollo_rfid_read={
  init:function(){
    this.setHelpUrl(Blockly.Msg.APOLLO_HELPURL);
    this.setColour(Blockly.Blocks.apollo.HUE6);
    this.appendDummyInput()
        .appendField(Blockly.Msg.APOLLO_RFID_read_TITLE);
    this.setOutput(!0,"String");
    this.setTooltip(Blockly.Msg.APOLLO_TOOLTIP)
  }
};
Blockly.Blocks.apollo_custom_tone={
  init:function(){
    this.setHelpUrl(Blockly.Msg.APOLLO_HELPURL);
    this.setColour(Blockly.Blocks.apollo.HUE7);
    this.appendValueInput("FREQ")
        .appendField(Blockly.Msg.EZ_TONE)
        .setCheck("Number")
        .appendField(Blockly.Msg.INOUT_TONE_APPENDTEXT_FREQ);
    this.appendValueInput("DURATION")
        .setCheck("Number")
        .appendField(Blockly.Msg.INOUT_TONE_APPENDTEXT_DURATION);
    this.setInputsInline(!0);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.APOLLO_TOOLTIP)}
};
Blockly.Blocks.apollo_tone={
  init:function(){
    this.setHelpUrl(Blockly.Msg.APOLLO_HELPURL);
    this.setColour(Blockly.Blocks.apollo.HUE7);
    this.appendDummyInput()
        .appendField(Blockly.Msg.EZ_TONE)
        .appendField(Blockly.Msg.INOUT_TONE_APPENDTEXT_FREQ)
        .appendField(new Blockly.FieldDropdown(profile["default"].tone),"FREQ");
    this.setInputsInline(!0);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.APOLLO_TOOLTIP)}
};
Blockly.Blocks.apollo_no_tone={
  init:function(){
    this.setHelpUrl(Blockly.Msg.APOLLO_HELPURL);
    this.setColour(Blockly.Blocks.apollo.HUE7);
    this.appendDummyInput()
        .appendField(Blockly.Msg.EZ_noTONE);
    this.setInputsInline(!0);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.APOLLO_TOOLTIP)}
};
Blockly.Blocks.apollo_bt_set={
  init:function(){
    this.setHelpUrl(Blockly.Msg.APOLLO_HELPURL);
    this.setColour(Blockly.Blocks.apollo.HUE8);
    this.appendDummyInput()
        .appendField(Blockly.Msg.APOLLO_BT_SET);
    this.appendValueInput("tx_pins")
        .appendField(Blockly.Msg.APOLLO_BT_SET_TX)
        .setCheck("Number");
    this.appendValueInput("rx_pins")
        .appendField(Blockly.Msg.APOLLO_BT_SET_RX)
        .setCheck("Number");
    this.appendValueInput("board_rate")
        .appendField(Blockly.Msg.APOLLO_BT_SET_RATE)
        .setCheck("Number");
    this.setInputsInline(!0);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.APOLLO_TOOLTIP)
  }
};
Blockly.Blocks.apollo_bt_able={
  init:function(){
    this.setHelpUrl(Blockly.Msg.APOLLO_HELPURL);
    this.setColour(Blockly.Blocks.apollo.HUE8);
    this.appendDummyInput()
        .appendField(Blockly.Msg.APOLLO_BT_ABLE)
    this.setInputsInline(!0);
    this.setOutput(!0,"Boolean");
    this.setTooltip(Blockly.Msg.APOLLO_TOOLTIP)
  }
};
Blockly.Blocks.apollo_bt_readString={
  init:function(){
    this.setHelpUrl(Blockly.Msg.APOLLO_HELPURL);
    this.setColour(Blockly.Blocks.apollo.HUE8);
    this.appendDummyInput()
        .appendField(Blockly.Msg.APOLLO_BT_READSTRING)
    this.setInputsInline(!0);
    this.setOutput(!0,"String");
    this.setTooltip(Blockly.Msg.APOLLO_TOOLTIP)
  }
};
Blockly.Blocks.apollo_bt_sendString={
  init:function(){
    this.setHelpUrl(Blockly.Msg.APOLLO_HELPURL);
    this.setColour(Blockly.Blocks.apollo.HUE8);
    this.appendDummyInput()
        .appendField(Blockly.Msg.APOLLO_BT_SENDSTRING);
    this.appendValueInput("show_text")
        .setCheck("String");
    this.setInputsInline(!0);
    this.setPreviousStatement(!0,null);
    this.setNextStatement(!0,null);
    this.setTooltip(Blockly.Msg.APOLLO_TOOLTIP)
  }
};

// AM7020
Blockly.Blocks.am7020 = {};
Blockly.Blocks.am7020.HUE = 180;
// check am7020_init Block exist
Blockly.Blocks.am7020.checkAm7020InitBlocks = function (block) {
    var blocks = block.workspace.getAllBlocks();
    for (var b = 0; b < blocks.length; b++)
        if (blocks[b].type == "am7020_init") {
            return true;
        }
    return false;
};
// check am7020_connect Block exist
Blockly.Blocks.am7020.checkAm7020ConnectBlocks = function (block) {
    var blocks = block.workspace.getAllBlocks();
    for (var b = 0; b < blocks.length; b++)
        if (blocks[b].type == "am7020_connect") {
            return true;
        }
    return false;
};
// AM7020 Init
Blockly.Blocks.am7020_init = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.AM7020_HELPURL);
        this.setColour(Blockly.Blocks.am7020.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.AM7020_INIT_TITLE)
            .appendField(Blockly.Msg.AM7020_INIT_BAUDRATE)
            .appendField(new Blockly.FieldDropdown([
                ["9600", "9600"],
                ["38400", "38400"],
                ["115200", "115200"],
            ]), "BAUDRATE")
            .appendField(Blockly.Msg.AM7020_INIT_RESET_PIN)
            .appendField(new Blockly.FieldDropdown([
                ["2", "2"],
                ["3", "3"],
                ["4", "4"],
                ["5", "5"],
                ["8", "8"],
                ["9", "9"],
                ["10", "10"],
                ["11", "11"],
                ["12", "12"],
                ["13", "13"],
                ["14", "14"],
                ["15", "15"],
                ["16", "16"],
                ["17", "17"],
            ]), "RESET_PIN");;
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.AM7020_INIT_TOOLTIP)
    }
};
// AM7020 Connect BS
Blockly.Blocks.am7020_connect = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.AM7020_HELPURL);
        this.setColour(Blockly.Blocks.am7020.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.AM7020_CONN_BS_TITLE)
            .appendField(Blockly.Msg.AM7020_CONN_BS_TELECOM)
            .appendField(new Blockly.FieldDropdown([
                ["台灣大哥大", "twm.nbiot"],
                ["中華電信", "internet.iot"],
                ["遠傳電信", "iot4ga2"],
            ]), "APN");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.AM7020_CONN_BS_TOOLTIP)
    }, onchange: function () {
        this.workspace && (Blockly.Blocks.am7020.checkAm7020InitBlocks(this) ? this.setWarningText(null) : this.setWarningText(Blockly.Msg.AM7020_CONN_BS_WARNING));
    }
};
// AM7020 Check NBIOT Connected
Blockly.Blocks.am7020_connected = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.AM7020_HELPURL);
        this.setColour(Blockly.Blocks.am7020.HUE);
        this.appendDummyInput().appendField(Blockly.Msg.AM7020_CHK_CONN_BS_TITLE);
        this.setInputsInline(true);
        this.setOutput(true, "Boolean");
        this.setTooltip(Blockly.Msg.AM7020_CHK_CONN_BS_TOOLTIP)
    }, onchange: function () {
        this.workspace && (Blockly.Blocks.am7020.checkAm7020ConnectBlocks(this) ? this.setWarningText(null) : this.setWarningText(Blockly.Msg.AM7020_RE_CONN_BS_WARNING));
    }
};
// AM7020 NBIOT Reconnect
Blockly.Blocks.am7020_reconnect = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.AM7020_HELPURL);
        this.setColour(Blockly.Blocks.am7020.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.AM7020_RE_CONN_BS_TITLE);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.AM7020_RE_CONN_BS_TOOLTIP)
    }, onchange: function () {
        this.workspace && (Blockly.Blocks.am7020.checkAm7020ConnectBlocks(this) ? this.setWarningText(null) : this.setWarningText(Blockly.Msg.AM7020_RE_CONN_BS_WARNING));
    }
};
/* AM7020 MQTT */
Blockly.Blocks.am7020.checkBlocks = function (a) {
    var b = null,
        d = a.type;
    a = a.workspace.getAllBlocks();
    for (var c = 0; c < a.length; c++)
        if ("am7020_mqtt_event" != a[c].type && "am7020_subscribe_mqtt" != a[c].type && "am7020_publish_mqtt" != a[c].type && "am7020_mqtt_received_topic" != a[c].type && "am7020_mqtt_received_msg" != a[c].type || null != b || (b = a[c].type != d ? !0 : !1), "am7020_connect_mqtt" == a[c].type)
            return !0;
    return b
};
// AM7020 MQTT Connect
Blockly.Blocks.am7020_connect_mqtt = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.AM7020_HELPURL);
        this.setColour(Blockly.Blocks.linkit.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.AM7020_SET_MQTT_UNTIL_READY_TITLE);
        this.appendValueInput("BROKER")
            .setCheck("String").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.AM7020_MQTT_BROKER);
        this.appendValueInput("PORT")
            .setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.AM7020_MQTT_PORT);
        this.appendValueInput("ID")
            .setCheck("String").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.AM7020_MQTT_ID);
        this.appendValueInput("USERNAME")
            .setCheck("String").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.AM7020_MQTT_USERNAME);
        this.appendValueInput("PASSWORD")
            .setCheck("String").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.AM7020_MQTT_PASSWORD);
        this.appendValueInput("KEEPALIVE")
            .setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.AM7020_MQTT_KEEPALIVE);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.AM7020_MQTT_TOOLTIP)
    }, onchange: function () {
        this.workspace && (Blockly.Blocks.am7020.checkAm7020ConnectBlocks(this) ? this.setWarningText(null) : this.setWarningText(Blockly.Msg.AM7020_MQTT_WARNING_ROOT));
    }
};
// AM7020 MQTT Subscribe
Blockly.Blocks.am7020_subscribe_mqtt = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.AM7020_HELPURL);
        this.setColour(Blockly.Blocks.linkit.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.AM7020_MQTT_SUB);
        this.appendValueInput("TOPIC").setCheck("String");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.AM7020_MQTT_TOOLTIP)
    }, onchange: function () {
        this.workspace && (Blockly.Blocks.am7020.checkBlocks(this) ? this.setWarningText(null) : this.setWarningText(Blockly.Msg.AM7020_MQTT_WARNING))
    }
};
// AM7020 MQTT Publish
Blockly.Blocks.am7020_publish_mqtt = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.AM7020_HELPURL);
        this.setColour(Blockly.Blocks.linkit.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.AM7020_MQTT_PUB_TITLE);
        this.appendValueInput("TOPIC")
            .setCheck("String").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.AM7020_MQTT_TOPIC);
        this.appendValueInput("MESSAGE")
            .setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.AM7020_MQTT_MESSAGE);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.AM7020_MQTT_TOOLTIP)
    }, onchange: function () {
        this.workspace && (Blockly.Blocks.am7020.checkBlocks(this) ? this.setWarningText(null) : this.setWarningText(Blockly.Msg.AM7020_MQTT_WARNING))
    }
};
// AM7020 MQTT Received Topic
Blockly.Blocks.am7020_mqtt_received_topic = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.AM7020_HELPURL);
        this.setColour(Blockly.Blocks.texts.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.AM7020_MQTT_RECEIVED_TOPIC);
        this.setInputsInline(true);
        this.setOutput(true, "String")
        this.setTooltip(Blockly.Msg.AM7020_MQTT_TOOLTIP)
    }, onchange: function () {
        this.workspace && (Blockly.Blocks.am7020.checkBlocks(this) ? this.setWarningText(null) : this.setWarningText(Blockly.Msg.AM7020_MQTT_WARNING))
    }
};
// AM7020 MQTT Received Msg
Blockly.Blocks.am7020_mqtt_received_msg = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.AM7020_HELPURL);
        this.setColour(Blockly.Blocks.texts.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.AM7020_MQTT_RECEIVED_MSG);
        this.setInputsInline(true);
        this.setOutput(true, "String")
        this.setTooltip(Blockly.Msg.AM7020_MQTT_TOOLTIP)
    }, onchange: function () {
        this.workspace && (Blockly.Blocks.am7020.checkBlocks(this) ? this.setWarningText(null) : this.setWarningText(Blockly.Msg.AM7020_MQTT_WARNING))
    }
};
// AM7020 MQTT Event
Blockly.Blocks.am7020_mqtt_event = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.AM7020_HELPURL);
        this.setColour(Blockly.Blocks.linkit.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.AM7020_MQTT_EVENT);
        this.setInputsInline(true);
        this.appendStatementInput("MSG_TOPIC_EQAL");
        this.setTooltip(Blockly.Msg.AM7020_MQTT_TOOLTIP)
    }, onchange: function () {
        this.workspace && (Blockly.Blocks.am7020.checkBlocks(this) ? this.setWarningText(null) : this.setWarningText(Blockly.Msg.AM7020_MQTT_WARNING))
    }
};
// AM7020 MQTT handle
Blockly.Blocks.am7020_mqtt_handle = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.AM7020_HELPURL);
        this.setColour(Blockly.Blocks.linkit.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.AM7020_MQTT_HANDLE);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.AM7020_MQTT_TOOLTIP)
    }, onchange: function () {
        this.workspace && (Blockly.Blocks.am7020.checkBlocks(this) ? this.setWarningText(null) : this.setWarningText(Blockly.Msg.AM7020_MQTT_WARNING))
    }
};
// AM7020 MQTT Connected
Blockly.Blocks.am7020_mqtt_connected = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.AM7020_HELPURL);
        this.setColour(Blockly.Blocks.linkit.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.AM7020_MQTT_CONNECTED);
        this.setInputsInline(true);
        this.setOutput(true, "Boolean");
        this.setTooltip(Blockly.Msg.AM7020_MQTT_TOOLTIP)
    }, onchange: function () {
        this.workspace && (Blockly.Blocks.am7020.checkBlocks(this) ? this.setWarningText(null) : this.setWarningText(Blockly.Msg.AM7020_MQTT_WARNING))
    }
};
// AM7020 MQTT Reconnect
Blockly.Blocks.am7020_mqtt_reconnect = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.AM7020_HELPURL);
        this.setColour(Blockly.Blocks.linkit.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.AM7020_MQTT_RECONNECT);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.AM7020_MQTT_TOOLTIP)
    }, onchange: function () {
        this.workspace && (Blockly.Blocks.am7020.checkBlocks(this) ? this.setWarningText(null) : this.setWarningText(Blockly.Msg.AM7020_MQTT_WARNING))
    }
};

// adafruitio uses linkit7697 wifi
Blockly.Blocks.adafruitio_connect = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.ADAFRUIT_IO_HELPURL);
        this.setColour(Blockly.Blocks.linkit.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ADAFRUIT_IO_CONN);
        this.appendValueInput("USERNAME")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ADAFRUIT_IO_USERNAME);
        this.appendValueInput("AIOKEY")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ADAFRUIT_IO_AIOKEY);
        this.appendValueInput("DEVICEID")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ADAFRUIT_IO_DEVICEID);
        this.setPreviousStatement(!0);
        this.setNextStatement(!0);
        this.setTooltip(Blockly.Msg.ADAFRUIT_IO_TOOLTIP)
    }
};

Blockly.Blocks.adafruitio_handle = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.ADAFRUIT_IO_HELPURL);
        this.setColour(Blockly.Blocks.linkit.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ADAFRUIT_IO_HANDLE);
        this.setInputsInline(true);
        this.setPreviousStatement(!0);
        this.setNextStatement(!0);
        this.setTooltip(Blockly.Msg.ADAFRUIT_IO_TOOLTIP)
    }
};

Blockly.Blocks.adafruitio_update_sensor = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.ADAFRUIT_IO_HELPURL);
        this.setColour(Blockly.Blocks.linkit.HUE);
        this.appendValueInput("SENSOR_ID")
            .appendField(Blockly.Msg.ADAFRUIT_IO_UPDATE)
            .setAlign(Blockly.ALIGN_RIGHT).setCheck("String");
        this.appendDummyInput()
            .appendField(Blockly.Msg.ADAFRUIT_IO_UPDATE_TAIL);
        this.appendValueInput("SET_VALUE");
        this.setInputsInline(!0);
        this.setPreviousStatement(!0);
        this.setNextStatement(!0);
        this.setTooltip(Blockly.Msg.ADAFRUIT_IO_TOOLTIP)
    }
};

Blockly.Blocks.adafruitio_event = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.ADAFRUIT_IO_HELPURL);
        this.setColour(Blockly.Blocks.linkit.HUE);
        this.appendValueInput("SENSOR_ID")
            .appendField(Blockly.Msg.ADAFRUIT_IO_IF_SENSOR)
            .setCheck("String");
        this.appendDummyInput()
            .appendField(Blockly.Msg.ADAFRUIT_IO_UPDATEING);
        this.setInputsInline(!0);
        this.appendStatementInput("CONTENT");
        this.setTooltip(Blockly.Msg.ADAFRUIT_IO_TOOLTIP)
    }
};

Blockly.Blocks.adafruitio_received_msg = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.ADAFRUIT_IO_HELPURL);
        this.setColour(Blockly.Blocks.texts.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ADAFRUIT_IO_RECEIVED_MSG);
        this.setInputsInline(true);
        this.setOutput(true, "String")
        this.setTooltip(Blockly.Msg.ADAFRUIT_IO_TOOLTIP)
    }
};
