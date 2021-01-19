/*
 * Copyright 2014-2019 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.webank.keymgr.exception;

import com.webank.keymgr.enums.MgrExceptionCodeEnums;

/**
 * PkeyMgrException
 *
 * @Description: PkeyMgrException
 * @author graysonzhang
 * @data 2019-07-10 15:23:35
 *
 */
public class KeyMgrException extends Exception {
    
    /** @Fields serialVersionUID : TODO */
    private static final long serialVersionUID = 893822168485972751L;
    private MgrExceptionCodeEnums ece;

    public KeyMgrException(MgrExceptionCodeEnums ece) {
        super(ece.getExceptionMessage());
        this.ece = ece;
    }

    public KeyMgrException(String msg) {
        super(msg);
        this.ece.setExceptionMessage(msg);
    }

    public MgrExceptionCodeEnums getCodeMessageEnums() {
        return ece;
    }
    

}
