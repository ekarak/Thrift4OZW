//
// Autogenerated by Thrift Compiler (0.9.0-dev)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//

if (typeof OpenZWave === 'undefined') {
  OpenZWave = {};
}
OpenZWave.RemoteValueGenre = {
'ValueGenre_Basic' : 0,
'ValueGenre_User' : 1,
'ValueGenre_Config' : 2,
'ValueGenre_System' : 3,
'ValueGenre_Count' : 4
};
OpenZWave.RemoteValueType = {
'ValueType_Bool' : 0,
'ValueType_Byte' : 1,
'ValueType_Decimal' : 2,
'ValueType_Int' : 3,
'ValueType_List' : 4,
'ValueType_Schedule' : 5,
'ValueType_Short' : 6,
'ValueType_String' : 7,
'ValueType_Button' : 8,
'ValueType_Max' : 8
};
OpenZWave.DriverControllerCommand = {
'ControllerCommand_None' : 0,
'ControllerCommand_AddController' : 1,
'ControllerCommand_AddDevice' : 2,
'ControllerCommand_CreateNewPrimary' : 3,
'ControllerCommand_ReceiveConfiguration' : 4,
'ControllerCommand_RemoveController' : 5,
'ControllerCommand_RemoveDevice' : 6,
'ControllerCommand_RemoveFailedNode' : 7,
'ControllerCommand_HasNodeFailed' : 8,
'ControllerCommand_ReplaceFailedNode' : 9,
'ControllerCommand_TransferPrimaryRole' : 10,
'ControllerCommand_RequestNetworkUpdate' : 11,
'ControllerCommand_RequestNodeNeighborUpdate' : 12,
'ControllerCommand_AssignReturnRoute' : 13,
'ControllerCommand_DeleteAllReturnRoutes' : 14,
'ControllerCommand_CreateButton' : 15,
'ControllerCommand_DeleteButton' : 16
};
OpenZWave.RemoteValueID = function(args) {
  this._homeId = null;
  this._nodeId = null;
  this._genre = null;
  this._commandClassId = null;
  this._instance = null;
  this._valueIndex = null;
  this._type = null;
  if (args) {
    if (args._homeId !== undefined) {
      this._homeId = args._homeId;
    }
    if (args._nodeId !== undefined) {
      this._nodeId = args._nodeId;
    }
    if (args._genre !== undefined) {
      this._genre = args._genre;
    }
    if (args._commandClassId !== undefined) {
      this._commandClassId = args._commandClassId;
    }
    if (args._instance !== undefined) {
      this._instance = args._instance;
    }
    if (args._valueIndex !== undefined) {
      this._valueIndex = args._valueIndex;
    }
    if (args._type !== undefined) {
      this._type = args._type;
    }
  }
};
OpenZWave.RemoteValueID.prototype = {};
OpenZWave.RemoteValueID.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this._homeId = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.BYTE) {
        this._nodeId = input.readByte().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this._genre = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.BYTE) {
        this._commandClassId = input.readByte().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.BYTE) {
        this._instance = input.readByte().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.BYTE) {
        this._valueIndex = input.readByte().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.I32) {
        this._type = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

OpenZWave.RemoteValueID.prototype.write = function(output) {
  output.writeStructBegin('RemoteValueID');
  if (this._homeId !== null && this._homeId !== undefined) {
    output.writeFieldBegin('_homeId', Thrift.Type.I32, 1);
    output.writeI32(this._homeId);
    output.writeFieldEnd();
  }
  if (this._nodeId !== null && this._nodeId !== undefined) {
    output.writeFieldBegin('_nodeId', Thrift.Type.BYTE, 2);
    output.writeByte(this._nodeId);
    output.writeFieldEnd();
  }
  if (this._genre !== null && this._genre !== undefined) {
    output.writeFieldBegin('_genre', Thrift.Type.I32, 3);
    output.writeI32(this._genre);
    output.writeFieldEnd();
  }
  if (this._commandClassId !== null && this._commandClassId !== undefined) {
    output.writeFieldBegin('_commandClassId', Thrift.Type.BYTE, 4);
    output.writeByte(this._commandClassId);
    output.writeFieldEnd();
  }
  if (this._instance !== null && this._instance !== undefined) {
    output.writeFieldBegin('_instance', Thrift.Type.BYTE, 5);
    output.writeByte(this._instance);
    output.writeFieldEnd();
  }
  if (this._valueIndex !== null && this._valueIndex !== undefined) {
    output.writeFieldBegin('_valueIndex', Thrift.Type.BYTE, 6);
    output.writeByte(this._valueIndex);
    output.writeFieldEnd();
  }
  if (this._type !== null && this._type !== undefined) {
    output.writeFieldBegin('_type', Thrift.Type.I32, 7);
    output.writeI32(this._type);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

OpenZWave.DriverData = function(args) {
  this.s_SOFCnt = null;
  this.s_ACKWaiting = null;
  this.s_readAborts = null;
  this.s_badChecksum = null;
  this.s_readCnt = null;
  this.s_writeCnt = null;
  this.s_CANCnt = null;
  this.s_NAKCnt = null;
  this.s_ACKCnt = null;
  this.s_OOFCnt = null;
  this.s_dropped = null;
  this.s_retries = null;
  this.s_controllerReadCnt = null;
  this.s_controllerWriteCnt = null;
  if (args) {
    if (args.s_SOFCnt !== undefined) {
      this.s_SOFCnt = args.s_SOFCnt;
    }
    if (args.s_ACKWaiting !== undefined) {
      this.s_ACKWaiting = args.s_ACKWaiting;
    }
    if (args.s_readAborts !== undefined) {
      this.s_readAborts = args.s_readAborts;
    }
    if (args.s_badChecksum !== undefined) {
      this.s_badChecksum = args.s_badChecksum;
    }
    if (args.s_readCnt !== undefined) {
      this.s_readCnt = args.s_readCnt;
    }
    if (args.s_writeCnt !== undefined) {
      this.s_writeCnt = args.s_writeCnt;
    }
    if (args.s_CANCnt !== undefined) {
      this.s_CANCnt = args.s_CANCnt;
    }
    if (args.s_NAKCnt !== undefined) {
      this.s_NAKCnt = args.s_NAKCnt;
    }
    if (args.s_ACKCnt !== undefined) {
      this.s_ACKCnt = args.s_ACKCnt;
    }
    if (args.s_OOFCnt !== undefined) {
      this.s_OOFCnt = args.s_OOFCnt;
    }
    if (args.s_dropped !== undefined) {
      this.s_dropped = args.s_dropped;
    }
    if (args.s_retries !== undefined) {
      this.s_retries = args.s_retries;
    }
    if (args.s_controllerReadCnt !== undefined) {
      this.s_controllerReadCnt = args.s_controllerReadCnt;
    }
    if (args.s_controllerWriteCnt !== undefined) {
      this.s_controllerWriteCnt = args.s_controllerWriteCnt;
    }
  }
};
OpenZWave.DriverData.prototype = {};
OpenZWave.DriverData.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.s_SOFCnt = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.s_ACKWaiting = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.s_readAborts = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.I32) {
        this.s_badChecksum = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.I32) {
        this.s_readCnt = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.I32) {
        this.s_writeCnt = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.I32) {
        this.s_CANCnt = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 8:
      if (ftype == Thrift.Type.I32) {
        this.s_NAKCnt = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 9:
      if (ftype == Thrift.Type.I32) {
        this.s_ACKCnt = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 10:
      if (ftype == Thrift.Type.I32) {
        this.s_OOFCnt = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 11:
      if (ftype == Thrift.Type.I32) {
        this.s_dropped = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 12:
      if (ftype == Thrift.Type.I32) {
        this.s_retries = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 13:
      if (ftype == Thrift.Type.I32) {
        this.s_controllerReadCnt = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 14:
      if (ftype == Thrift.Type.I32) {
        this.s_controllerWriteCnt = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

OpenZWave.DriverData.prototype.write = function(output) {
  output.writeStructBegin('DriverData');
  if (this.s_SOFCnt !== null && this.s_SOFCnt !== undefined) {
    output.writeFieldBegin('s_SOFCnt', Thrift.Type.I32, 1);
    output.writeI32(this.s_SOFCnt);
    output.writeFieldEnd();
  }
  if (this.s_ACKWaiting !== null && this.s_ACKWaiting !== undefined) {
    output.writeFieldBegin('s_ACKWaiting', Thrift.Type.I32, 2);
    output.writeI32(this.s_ACKWaiting);
    output.writeFieldEnd();
  }
  if (this.s_readAborts !== null && this.s_readAborts !== undefined) {
    output.writeFieldBegin('s_readAborts', Thrift.Type.I32, 3);
    output.writeI32(this.s_readAborts);
    output.writeFieldEnd();
  }
  if (this.s_badChecksum !== null && this.s_badChecksum !== undefined) {
    output.writeFieldBegin('s_badChecksum', Thrift.Type.I32, 4);
    output.writeI32(this.s_badChecksum);
    output.writeFieldEnd();
  }
  if (this.s_readCnt !== null && this.s_readCnt !== undefined) {
    output.writeFieldBegin('s_readCnt', Thrift.Type.I32, 5);
    output.writeI32(this.s_readCnt);
    output.writeFieldEnd();
  }
  if (this.s_writeCnt !== null && this.s_writeCnt !== undefined) {
    output.writeFieldBegin('s_writeCnt', Thrift.Type.I32, 6);
    output.writeI32(this.s_writeCnt);
    output.writeFieldEnd();
  }
  if (this.s_CANCnt !== null && this.s_CANCnt !== undefined) {
    output.writeFieldBegin('s_CANCnt', Thrift.Type.I32, 7);
    output.writeI32(this.s_CANCnt);
    output.writeFieldEnd();
  }
  if (this.s_NAKCnt !== null && this.s_NAKCnt !== undefined) {
    output.writeFieldBegin('s_NAKCnt', Thrift.Type.I32, 8);
    output.writeI32(this.s_NAKCnt);
    output.writeFieldEnd();
  }
  if (this.s_ACKCnt !== null && this.s_ACKCnt !== undefined) {
    output.writeFieldBegin('s_ACKCnt', Thrift.Type.I32, 9);
    output.writeI32(this.s_ACKCnt);
    output.writeFieldEnd();
  }
  if (this.s_OOFCnt !== null && this.s_OOFCnt !== undefined) {
    output.writeFieldBegin('s_OOFCnt', Thrift.Type.I32, 10);
    output.writeI32(this.s_OOFCnt);
    output.writeFieldEnd();
  }
  if (this.s_dropped !== null && this.s_dropped !== undefined) {
    output.writeFieldBegin('s_dropped', Thrift.Type.I32, 11);
    output.writeI32(this.s_dropped);
    output.writeFieldEnd();
  }
  if (this.s_retries !== null && this.s_retries !== undefined) {
    output.writeFieldBegin('s_retries', Thrift.Type.I32, 12);
    output.writeI32(this.s_retries);
    output.writeFieldEnd();
  }
  if (this.s_controllerReadCnt !== null && this.s_controllerReadCnt !== undefined) {
    output.writeFieldBegin('s_controllerReadCnt', Thrift.Type.I32, 13);
    output.writeI32(this.s_controllerReadCnt);
    output.writeFieldEnd();
  }
  if (this.s_controllerWriteCnt !== null && this.s_controllerWriteCnt !== undefined) {
    output.writeFieldBegin('s_controllerWriteCnt', Thrift.Type.I32, 14);
    output.writeI32(this.s_controllerWriteCnt);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

OpenZWave.GetDriverStatisticsReturnStruct = function(args) {
  this._data = null;
  if (args) {
    if (args._data !== undefined) {
      this._data = args._data;
    }
  }
};
OpenZWave.GetDriverStatisticsReturnStruct.prototype = {};
OpenZWave.GetDriverStatisticsReturnStruct.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this._data = new OpenZWave.DriverData();
        this._data.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

OpenZWave.GetDriverStatisticsReturnStruct.prototype.write = function(output) {
  output.writeStructBegin('GetDriverStatisticsReturnStruct');
  if (this._data !== null && this._data !== undefined) {
    output.writeFieldBegin('_data', Thrift.Type.STRUCT, 1);
    this._data.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

OpenZWave.GetSwitchPointReturnStruct = function(args) {
  this.retval = null;
  this.o_hours = null;
  this.o_minutes = null;
  this.o_setback = null;
  if (args) {
    if (args.retval !== undefined) {
      this.retval = args.retval;
    }
    if (args.o_hours !== undefined) {
      this.o_hours = args.o_hours;
    }
    if (args.o_minutes !== undefined) {
      this.o_minutes = args.o_minutes;
    }
    if (args.o_setback !== undefined) {
      this.o_setback = args.o_setback;
    }
  }
};
OpenZWave.GetSwitchPointReturnStruct.prototype = {};
OpenZWave.GetSwitchPointReturnStruct.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.BOOL) {
        this.retval = input.readBool().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.BYTE) {
        this.o_hours = input.readByte().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.BYTE) {
        this.o_minutes = input.readByte().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.BYTE) {
        this.o_setback = input.readByte().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

OpenZWave.GetSwitchPointReturnStruct.prototype.write = function(output) {
  output.writeStructBegin('GetSwitchPointReturnStruct');
  if (this.retval !== null && this.retval !== undefined) {
    output.writeFieldBegin('retval', Thrift.Type.BOOL, 1);
    output.writeBool(this.retval);
    output.writeFieldEnd();
  }
  if (this.o_hours !== null && this.o_hours !== undefined) {
    output.writeFieldBegin('o_hours', Thrift.Type.BYTE, 2);
    output.writeByte(this.o_hours);
    output.writeFieldEnd();
  }
  if (this.o_minutes !== null && this.o_minutes !== undefined) {
    output.writeFieldBegin('o_minutes', Thrift.Type.BYTE, 3);
    output.writeByte(this.o_minutes);
    output.writeFieldEnd();
  }
  if (this.o_setback !== null && this.o_setback !== undefined) {
    output.writeFieldBegin('o_setback', Thrift.Type.BYTE, 4);
    output.writeByte(this.o_setback);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

OpenZWave.Bool_Bool = function(args) {
  this.retval = null;
  this.o_value = null;
  if (args) {
    if (args.retval !== undefined) {
      this.retval = args.retval;
    }
    if (args.o_value !== undefined) {
      this.o_value = args.o_value;
    }
  }
};
OpenZWave.Bool_Bool.prototype = {};
OpenZWave.Bool_Bool.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.BOOL) {
        this.retval = input.readBool().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.BOOL) {
        this.o_value = input.readBool().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

OpenZWave.Bool_Bool.prototype.write = function(output) {
  output.writeStructBegin('Bool_Bool');
  if (this.retval !== null && this.retval !== undefined) {
    output.writeFieldBegin('retval', Thrift.Type.BOOL, 1);
    output.writeBool(this.retval);
    output.writeFieldEnd();
  }
  if (this.o_value !== null && this.o_value !== undefined) {
    output.writeFieldBegin('o_value', Thrift.Type.BOOL, 2);
    output.writeBool(this.o_value);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

OpenZWave.Bool_UInt8 = function(args) {
  this.retval = null;
  this.o_value = null;
  if (args) {
    if (args.retval !== undefined) {
      this.retval = args.retval;
    }
    if (args.o_value !== undefined) {
      this.o_value = args.o_value;
    }
  }
};
OpenZWave.Bool_UInt8.prototype = {};
OpenZWave.Bool_UInt8.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.BOOL) {
        this.retval = input.readBool().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.BYTE) {
        this.o_value = input.readByte().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

OpenZWave.Bool_UInt8.prototype.write = function(output) {
  output.writeStructBegin('Bool_UInt8');
  if (this.retval !== null && this.retval !== undefined) {
    output.writeFieldBegin('retval', Thrift.Type.BOOL, 1);
    output.writeBool(this.retval);
    output.writeFieldEnd();
  }
  if (this.o_value !== null && this.o_value !== undefined) {
    output.writeFieldBegin('o_value', Thrift.Type.BYTE, 2);
    output.writeByte(this.o_value);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

OpenZWave.Bool_Float = function(args) {
  this.retval = null;
  this.o_value = null;
  if (args) {
    if (args.retval !== undefined) {
      this.retval = args.retval;
    }
    if (args.o_value !== undefined) {
      this.o_value = args.o_value;
    }
  }
};
OpenZWave.Bool_Float.prototype = {};
OpenZWave.Bool_Float.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.BOOL) {
        this.retval = input.readBool().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.DOUBLE) {
        this.o_value = input.readDouble().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

OpenZWave.Bool_Float.prototype.write = function(output) {
  output.writeStructBegin('Bool_Float');
  if (this.retval !== null && this.retval !== undefined) {
    output.writeFieldBegin('retval', Thrift.Type.BOOL, 1);
    output.writeBool(this.retval);
    output.writeFieldEnd();
  }
  if (this.o_value !== null && this.o_value !== undefined) {
    output.writeFieldBegin('o_value', Thrift.Type.DOUBLE, 2);
    output.writeDouble(this.o_value);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

OpenZWave.Bool_Int = function(args) {
  this.retval = null;
  this.o_value = null;
  if (args) {
    if (args.retval !== undefined) {
      this.retval = args.retval;
    }
    if (args.o_value !== undefined) {
      this.o_value = args.o_value;
    }
  }
};
OpenZWave.Bool_Int.prototype = {};
OpenZWave.Bool_Int.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.BOOL) {
        this.retval = input.readBool().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.o_value = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

OpenZWave.Bool_Int.prototype.write = function(output) {
  output.writeStructBegin('Bool_Int');
  if (this.retval !== null && this.retval !== undefined) {
    output.writeFieldBegin('retval', Thrift.Type.BOOL, 1);
    output.writeBool(this.retval);
    output.writeFieldEnd();
  }
  if (this.o_value !== null && this.o_value !== undefined) {
    output.writeFieldBegin('o_value', Thrift.Type.I32, 2);
    output.writeI32(this.o_value);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

OpenZWave.Bool_Int16 = function(args) {
  this.retval = null;
  this.o_value = null;
  if (args) {
    if (args.retval !== undefined) {
      this.retval = args.retval;
    }
    if (args.o_value !== undefined) {
      this.o_value = args.o_value;
    }
  }
};
OpenZWave.Bool_Int16.prototype = {};
OpenZWave.Bool_Int16.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.BOOL) {
        this.retval = input.readBool().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I16) {
        this.o_value = input.readI16().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

OpenZWave.Bool_Int16.prototype.write = function(output) {
  output.writeStructBegin('Bool_Int16');
  if (this.retval !== null && this.retval !== undefined) {
    output.writeFieldBegin('retval', Thrift.Type.BOOL, 1);
    output.writeBool(this.retval);
    output.writeFieldEnd();
  }
  if (this.o_value !== null && this.o_value !== undefined) {
    output.writeFieldBegin('o_value', Thrift.Type.I16, 2);
    output.writeI16(this.o_value);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

OpenZWave.Bool_String = function(args) {
  this.retval = null;
  this.o_value = null;
  if (args) {
    if (args.retval !== undefined) {
      this.retval = args.retval;
    }
    if (args.o_value !== undefined) {
      this.o_value = args.o_value;
    }
  }
};
OpenZWave.Bool_String.prototype = {};
OpenZWave.Bool_String.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.BOOL) {
        this.retval = input.readBool().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.o_value = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

OpenZWave.Bool_String.prototype.write = function(output) {
  output.writeStructBegin('Bool_String');
  if (this.retval !== null && this.retval !== undefined) {
    output.writeFieldBegin('retval', Thrift.Type.BOOL, 1);
    output.writeBool(this.retval);
    output.writeFieldEnd();
  }
  if (this.o_value !== null && this.o_value !== undefined) {
    output.writeFieldBegin('o_value', Thrift.Type.STRING, 2);
    output.writeString(this.o_value);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

OpenZWave.Bool_ListString = function(args) {
  this.retval = null;
  this.o_value = null;
  if (args) {
    if (args.retval !== undefined) {
      this.retval = args.retval;
    }
    if (args.o_value !== undefined) {
      this.o_value = args.o_value;
    }
  }
};
OpenZWave.Bool_ListString.prototype = {};
OpenZWave.Bool_ListString.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.BOOL) {
        this.retval = input.readBool().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.LIST) {
        var _size0 = 0;
        var _rtmp34;
        this.o_value = [];
        var _etype3 = 0;
        _rtmp34 = input.readListBegin();
        _etype3 = _rtmp34.etype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          var elem6 = null;
          elem6 = input.readString().value;
          this.o_value.push(elem6);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

OpenZWave.Bool_ListString.prototype.write = function(output) {
  output.writeStructBegin('Bool_ListString');
  if (this.retval !== null && this.retval !== undefined) {
    output.writeFieldBegin('retval', Thrift.Type.BOOL, 1);
    output.writeBool(this.retval);
    output.writeFieldEnd();
  }
  if (this.o_value !== null && this.o_value !== undefined) {
    output.writeFieldBegin('o_value', Thrift.Type.LIST, 2);
    output.writeListBegin(Thrift.Type.STRING, this.o_value.length);
    for (var iter7 in this.o_value)
    {
      if (this.o_value.hasOwnProperty(iter7))
      {
        iter7 = this.o_value[iter7];
        output.writeString(iter7);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

OpenZWave.UInt32_ListByte = function(args) {
  this.retval = null;
  this._nodeNeighbors = null;
  if (args) {
    if (args.retval !== undefined) {
      this.retval = args.retval;
    }
    if (args._nodeNeighbors !== undefined) {
      this._nodeNeighbors = args._nodeNeighbors;
    }
  }
};
OpenZWave.UInt32_ListByte.prototype = {};
OpenZWave.UInt32_ListByte.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.retval = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.LIST) {
        var _size8 = 0;
        var _rtmp312;
        this._nodeNeighbors = [];
        var _etype11 = 0;
        _rtmp312 = input.readListBegin();
        _etype11 = _rtmp312.etype;
        _size8 = _rtmp312.size;
        for (var _i13 = 0; _i13 < _size8; ++_i13)
        {
          var elem14 = null;
          elem14 = input.readByte().value;
          this._nodeNeighbors.push(elem14);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

OpenZWave.UInt32_ListByte.prototype.write = function(output) {
  output.writeStructBegin('UInt32_ListByte');
  if (this.retval !== null && this.retval !== undefined) {
    output.writeFieldBegin('retval', Thrift.Type.I32, 1);
    output.writeI32(this.retval);
    output.writeFieldEnd();
  }
  if (this._nodeNeighbors !== null && this._nodeNeighbors !== undefined) {
    output.writeFieldBegin('_nodeNeighbors', Thrift.Type.LIST, 2);
    output.writeListBegin(Thrift.Type.BYTE, this._nodeNeighbors.length);
    for (var iter15 in this._nodeNeighbors)
    {
      if (this._nodeNeighbors.hasOwnProperty(iter15))
      {
        iter15 = this._nodeNeighbors[iter15];
        output.writeByte(iter15);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

OpenZWave.Bool_GetNodeClassInformation = function(args) {
  this.retval = null;
  this._className = null;
  this._classVersion = null;
  if (args) {
    if (args.retval !== undefined) {
      this.retval = args.retval;
    }
    if (args._className !== undefined) {
      this._className = args._className;
    }
    if (args._classVersion !== undefined) {
      this._classVersion = args._classVersion;
    }
  }
};
OpenZWave.Bool_GetNodeClassInformation.prototype = {};
OpenZWave.Bool_GetNodeClassInformation.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.BOOL) {
        this.retval = input.readBool().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this._className = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.BYTE) {
        this._classVersion = input.readByte().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

OpenZWave.Bool_GetNodeClassInformation.prototype.write = function(output) {
  output.writeStructBegin('Bool_GetNodeClassInformation');
  if (this.retval !== null && this.retval !== undefined) {
    output.writeFieldBegin('retval', Thrift.Type.BOOL, 1);
    output.writeBool(this.retval);
    output.writeFieldEnd();
  }
  if (this._className !== null && this._className !== undefined) {
    output.writeFieldBegin('_className', Thrift.Type.STRING, 2);
    output.writeString(this._className);
    output.writeFieldEnd();
  }
  if (this._classVersion !== null && this._classVersion !== undefined) {
    output.writeFieldBegin('_classVersion', Thrift.Type.BYTE, 3);
    output.writeByte(this._classVersion);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

OpenZWave.GetAssociationsReturnStruct = function(args) {
  this.retval = null;
  this.o_associations = null;
  if (args) {
    if (args.retval !== undefined) {
      this.retval = args.retval;
    }
    if (args.o_associations !== undefined) {
      this.o_associations = args.o_associations;
    }
  }
};
OpenZWave.GetAssociationsReturnStruct.prototype = {};
OpenZWave.GetAssociationsReturnStruct.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.retval = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.LIST) {
        var _size16 = 0;
        var _rtmp320;
        this.o_associations = [];
        var _etype19 = 0;
        _rtmp320 = input.readListBegin();
        _etype19 = _rtmp320.etype;
        _size16 = _rtmp320.size;
        for (var _i21 = 0; _i21 < _size16; ++_i21)
        {
          var elem22 = null;
          elem22 = input.readByte().value;
          this.o_associations.push(elem22);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

OpenZWave.GetAssociationsReturnStruct.prototype.write = function(output) {
  output.writeStructBegin('GetAssociationsReturnStruct');
  if (this.retval !== null && this.retval !== undefined) {
    output.writeFieldBegin('retval', Thrift.Type.I32, 1);
    output.writeI32(this.retval);
    output.writeFieldEnd();
  }
  if (this.o_associations !== null && this.o_associations !== undefined) {
    output.writeFieldBegin('o_associations', Thrift.Type.LIST, 2);
    output.writeListBegin(Thrift.Type.BYTE, this.o_associations.length);
    for (var iter23 in this.o_associations)
    {
      if (this.o_associations.hasOwnProperty(iter23))
      {
        iter23 = this.o_associations[iter23];
        output.writeByte(iter23);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

OpenZWave.GetAllScenesReturnStruct = function(args) {
  this.retval = null;
  this._sceneIds = null;
  if (args) {
    if (args.retval !== undefined) {
      this.retval = args.retval;
    }
    if (args._sceneIds !== undefined) {
      this._sceneIds = args._sceneIds;
    }
  }
};
OpenZWave.GetAllScenesReturnStruct.prototype = {};
OpenZWave.GetAllScenesReturnStruct.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.BYTE) {
        this.retval = input.readByte().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.LIST) {
        var _size24 = 0;
        var _rtmp328;
        this._sceneIds = [];
        var _etype27 = 0;
        _rtmp328 = input.readListBegin();
        _etype27 = _rtmp328.etype;
        _size24 = _rtmp328.size;
        for (var _i29 = 0; _i29 < _size24; ++_i29)
        {
          var elem30 = null;
          elem30 = input.readByte().value;
          this._sceneIds.push(elem30);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

OpenZWave.GetAllScenesReturnStruct.prototype.write = function(output) {
  output.writeStructBegin('GetAllScenesReturnStruct');
  if (this.retval !== null && this.retval !== undefined) {
    output.writeFieldBegin('retval', Thrift.Type.BYTE, 1);
    output.writeByte(this.retval);
    output.writeFieldEnd();
  }
  if (this._sceneIds !== null && this._sceneIds !== undefined) {
    output.writeFieldBegin('_sceneIds', Thrift.Type.LIST, 2);
    output.writeListBegin(Thrift.Type.BYTE, this._sceneIds.length);
    for (var iter31 in this._sceneIds)
    {
      if (this._sceneIds.hasOwnProperty(iter31))
      {
        iter31 = this._sceneIds[iter31];
        output.writeByte(iter31);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

OpenZWave.SceneGetValuesReturnStruct = function(args) {
  this.retval = null;
  this.o_value = null;
  if (args) {
    if (args.retval !== undefined) {
      this.retval = args.retval;
    }
    if (args.o_value !== undefined) {
      this.o_value = args.o_value;
    }
  }
};
OpenZWave.SceneGetValuesReturnStruct.prototype = {};
OpenZWave.SceneGetValuesReturnStruct.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.retval = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.LIST) {
        var _size32 = 0;
        var _rtmp336;
        this.o_value = [];
        var _etype35 = 0;
        _rtmp336 = input.readListBegin();
        _etype35 = _rtmp336.etype;
        _size32 = _rtmp336.size;
        for (var _i37 = 0; _i37 < _size32; ++_i37)
        {
          var elem38 = null;
          elem38 = new OpenZWave.RemoteValueID();
          elem38.read(input);
          this.o_value.push(elem38);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

OpenZWave.SceneGetValuesReturnStruct.prototype.write = function(output) {
  output.writeStructBegin('SceneGetValuesReturnStruct');
  if (this.retval !== null && this.retval !== undefined) {
    output.writeFieldBegin('retval', Thrift.Type.I32, 1);
    output.writeI32(this.retval);
    output.writeFieldEnd();
  }
  if (this.o_value !== null && this.o_value !== undefined) {
    output.writeFieldBegin('o_value', Thrift.Type.LIST, 2);
    output.writeListBegin(Thrift.Type.STRUCT, this.o_value.length);
    for (var iter39 in this.o_value)
    {
      if (this.o_value.hasOwnProperty(iter39))
      {
        iter39 = this.o_value[iter39];
        iter39.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

