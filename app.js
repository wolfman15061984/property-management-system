
"use strict";

// AQARI - Property Management System
// إدارة العقارات والوحدات

const AQARI = {
  version: "0.2.0",

  // إنشاء رقم تعريفي لكل عقار أو وحدة
  createId() {
    return crypto.randomUUID();
  },

  // قراءة البيانات المحفوظة في المتصفح
  load(key) {
    try {
      const data = JSON.parse(
        localStorage.getItem(key) || "[]"
      );
      return Array.isArray(data) ? data : [];
    } catch (error) {
      console.error("Storage error:", error);
      return [];
    }
  },

  // حفظ البيانات في المتصفح
  save(key, data) {
    localStorage.setItem(
      key,
      JSON.stringify(data)
    );
  },

  // قراءة العقارات المسجلة سابقاً
  getProperties() {
    return this.load("aqari-properties");
  },

  // قراءة الوحدات العقارية
  getUnits() {
    return this.load("aqari-units");
  }
};
