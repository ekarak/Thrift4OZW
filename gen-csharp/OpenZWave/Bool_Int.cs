/**
 * Autogenerated by Thrift Compiler (0.9.0-dev)
 *
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
 *  @generated
 */
using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;
using System.IO;
using Thrift;
using Thrift.Collections;
using System.Runtime.Serialization;
using Thrift.Protocol;
using Thrift.Transport;

namespace OpenZWave
{

  #if !SILVERLIGHT
  [Serializable]
  #endif
  public partial class Bool_Int : TBase
  {
    private bool _retval;
    private int _o_value;

    public bool Retval
    {
      get
      {
        return _retval;
      }
      set
      {
        __isset.retval = true;
        this._retval = value;
      }
    }

    public int O_value
    {
      get
      {
        return _o_value;
      }
      set
      {
        __isset.o_value = true;
        this._o_value = value;
      }
    }


    public Isset __isset;
    #if !SILVERLIGHT
    [Serializable]
    #endif
    public struct Isset {
      public bool retval;
      public bool o_value;
    }

    public Bool_Int() {
    }

    public void Read (TProtocol iprot)
    {
      TField field;
      iprot.ReadStructBegin();
      while (true)
      {
        field = iprot.ReadFieldBegin();
        if (field.Type == TType.Stop) { 
          break;
        }
        switch (field.ID)
        {
          case 1:
            if (field.Type == TType.Bool) {
              Retval = iprot.ReadBool();
            } else { 
              TProtocolUtil.Skip(iprot, field.Type);
            }
            break;
          case 2:
            if (field.Type == TType.I32) {
              O_value = iprot.ReadI32();
            } else { 
              TProtocolUtil.Skip(iprot, field.Type);
            }
            break;
          default: 
            TProtocolUtil.Skip(iprot, field.Type);
            break;
        }
        iprot.ReadFieldEnd();
      }
      iprot.ReadStructEnd();
    }

    public void Write(TProtocol oprot) {
      TStruct struc = new TStruct("Bool_Int");
      oprot.WriteStructBegin(struc);
      TField field = new TField();
      if (__isset.retval) {
        field.Name = "retval";
        field.Type = TType.Bool;
        field.ID = 1;
        oprot.WriteFieldBegin(field);
        oprot.WriteBool(Retval);
        oprot.WriteFieldEnd();
      }
      if (__isset.o_value) {
        field.Name = "o_value";
        field.Type = TType.I32;
        field.ID = 2;
        oprot.WriteFieldBegin(field);
        oprot.WriteI32(O_value);
        oprot.WriteFieldEnd();
      }
      oprot.WriteFieldStop();
      oprot.WriteStructEnd();
    }

    public override string ToString() {
      StringBuilder sb = new StringBuilder("Bool_Int(");
      sb.Append("Retval: ");
      sb.Append(Retval);
      sb.Append(",O_value: ");
      sb.Append(O_value);
      sb.Append(")");
      return sb.ToString();
    }

  }

}
