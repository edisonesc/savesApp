import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from 'rxjs';
import { Goal } from '../models/goal.model';
import { LoadingController } from '@ionic/angular';
import { tick } from '@angular/core/testing';
import { Storage } from '@ionic/storage';
const ITEMS_KEY = 'goal-items';

@Injectable()
export class GoalService {
    private _goals: BehaviorSubject<Goal[]>;
    private goal: Goal[];
    constructor(
        private loadingCtrl: LoadingController,
        private storage: Storage
    ) { }

    getGoals(): Promise<Goal[]> {
        return this.storage.get(ITEMS_KEY);

    }

    subscribeGoal() {
        return this._goals.asObservable();
    }
    fetchGoals() {
        this.storage.get(ITEMS_KEY).then((goals: Goal[]) => {
            this._goals.next(goals);
        });
    }

    updateGoal(goal: Goal): Promise<any> {
        return this.storage.get(ITEMS_KEY).then((goals: Goal[]) => {
            if (!goals || goals.length === 0) {
                return null;
            }
            const newGoal: Goal[] = [];
            for (let i of goals) {
                if (i.id === goal.id) {
                    newGoal.push(goal);
                } else {
                    newGoal.push(i);
                }
            }
            return this.storage.set(ITEMS_KEY, newGoal);
        });
    }
    createGoal(goal: Goal): Promise<any> {
        return this.storage.get(ITEMS_KEY).then((goals: Goal[]) => {
            if (goals) {
                goals.push(goal);
                return this.storage.set(ITEMS_KEY, goals);
            } else {
                return this.storage.set(ITEMS_KEY, [goal]);
            }
        });
    }
    deleteItem(id: number): Promise<Goal> {
        return this.storage.get(ITEMS_KEY).then((goals: Goal[]) => {
            if (!goals || goals.length === 0) {
                return null;
            }
            const toKeep: Goal[] = [];
            for (let i of goals) {
                if (i.id !== id) { toKeep.push(i); }
            }
        });
    }

}
