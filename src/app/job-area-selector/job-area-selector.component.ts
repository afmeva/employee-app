import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

type jobOption = {
  value: string,
  name: string,
  hasTip: boolean
};

type job = {
  name: string,
  value: string,
  hasTip: boolean,
  tip: number
}

@Component({
  selector: 'app-job-area-selector',
  templateUrl: './job-area-selector.component.html',
  styleUrls: ['./job-area-selector.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => JobAreaSelectorComponent),
      multi: true
    }
  ]
})
export class JobAreaSelectorComponent implements ControlValueAccessor {
  onTouched: (_: any) => void;
  currentSelection: jobOption;
  disabled: boolean;
  jobsByArea: Array<[string, jobOption[]]>
  tipRate: number;

  constructor() {
    this.tipRate = 0.5;
    this.jobsByArea = [
      ['services', [
        {
          value: 'manager',
          name: 'Manager',
          hasTip: false,
        },
        {
          value: 'host',
          name: 'Hosts',
          hasTip: false,
        },
        {
          value: 'tuttofare',
          name: 'Tuttofare',
          hasTip: false,
        },
        {
          value: 'waitress',
          name: 'Waitress',
          hasTip: true,
        },
        {
          value: 'dinningRoomManager',
          name: 'Dinning Room Manager',
          hasTip: true,
        }]],
      ['kitchen', [
        {
          value: 'chef',
          name: 'Chef',
          hasTip: false,
        },
        {
          value: 'sousChef',
          name: 'Sous Chef',
          hasTip: false,
        },
        {
          value: 'dishwasher',
          name: 'Dishwasher',
          hasTip: false,
        },
        {
          value: 'cook',
          name: 'Cook',
          hasTip: false,
        },
        {
          value: 'dinningRoomManager',
          name: 'Dinning Room Manager',
          hasTip: false,
        }]]
    ];
  }

  get value(): job {
    return {
      ...this.currentSelection,
      tip: this.tipRate
    }
  }
  onChange(value: job) { }

  change(value: jobOption): void {
    this.writeValue(value);
  };

  onTabChange(): void {
    const emptyJobOption = {
      value: '',
      name: '',
      hasTip: false
    }
    this.writeValue(emptyJobOption);
  }

  onTipRateInput(value: number): void {
    this.tipRate = value;
    this.writeValue(this.currentSelection);
  }

  writeValue(value: jobOption): void {
    this.currentSelection = value;
    this.onChange(this.value);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
