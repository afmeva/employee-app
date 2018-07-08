import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

type jobArea = {
  name: string,
  value: string,
  jobs: job[];
};

type job = {
  value: string,
  name: string,
  hasTip: boolean,
}

// should this be a service?
const jobsByArea: jobArea[] = [
  {
    name: 'Services',
    value: 'services',
    jobs: [{
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
    }]
  },
  {
    value: 'kitchen',
    name: 'Kitchen',
    jobs: [
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
      }
    ]
  }
]

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
  disabled: boolean; //TODO: fix disable behavior
  tipRate: number | null;
  areaSelected: string;
  jobsByArea: jobArea[];
  jobTitlesSelected: job[];
  jobTitleSelected: string;
  showTip: boolean;

  constructor() {
    this.tipRate = 0.5;
    this.jobsByArea = jobsByArea;
    this.showTip = false;
  }

  get value() {
    return {
      area: this.areaSelected,
      jobTitle: this.jobTitleSelected,
      tipRate: this.tipRate
    };
  }

  onAreaChange(areaValue: string): void {
    this.cleanSelection();
    this.onChange(this.value);

    this.areaSelected = areaValue;
    // Should be better access it directly using index?
    // TODO: fix when find returns undefined
    this.jobTitlesSelected = this.jobsByArea.find(area => area.value === areaValue).jobs;
  }

  onJobTitleChange(jobTitle: string): void {
    this.jobTitleSelected = jobTitle;
    // Should be better access it directly using index?
    // TODO: fix when find returns undefined
    this.showTip = this.jobTitlesSelected.find(job => job.value === jobTitle).hasTip;
    this.onChange(this.value);
  }

  cleanSelection(): void {
    this.areaSelected = '';
    this.jobTitleSelected = '';
    this.tipRate = null;
  }

  onChange(value: any) { }

  onTipRateInput(value: number): void {
    this.tipRate = value;
    this.onChange(this.value);
  }

  writeValue(value: any): void {
    this.onAreaChange(value.area);
    this.jobTitleSelected = value.jobTitle;
    this.tipRate = value.tipRate;
    this.showTip = !!value.tipRate;

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
