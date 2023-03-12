'use client';

import React, { useState } from 'react';
import { Descendant } from 'slate';
import { YoptaEditor } from 'yopta-editor';

import 'yopta-editor/dist/index.css';

export function YoptaWrapper() {
  const [value, setValue] = useState<Descendant[]>([]);
  return (
    <div className="rounded-md border border-slate-300 hover:border-slate-400">
      <YoptaEditor value={value} onChange={(data) => setValue(data)} />
    </div>
  );
}
