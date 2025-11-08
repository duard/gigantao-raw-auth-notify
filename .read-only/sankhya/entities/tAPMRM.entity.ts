import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TapfrmEntity } from './tAPFRM.entity';
import { TapirmEntity } from './tAPIRM.entity';
import { TcsconEntity } from './tCSCON.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TcsprjEntity } from './tCSPRJ.entity';

@Index('PK_TAPMRM', ['nurm'], { unique: true })
@Entity('TAPMRM', { schema: 'SANKHYA' })
export class TapmrmEntity {
  @Column('int', { primary: true, name: 'NURM' })
  nurm: number;

  @Column('datetime', { name: 'DHMOV', default: () => 'getdate()' })
  dhmov: Date;

  @OneToMany(() => TapfrmEntity, (tapfrmEntity) => tapfrmEntity.nurm2)
  tapfrms: TapfrmEntity[];

  @OneToMany(() => TapirmEntity, (tapirmEntity) => tapirmEntity.nurm2)
  tapirms: TapirmEntity[];

  @ManyToOne(() => TcsconEntity, (tcsconEntity) => tcsconEntity.tapmrms)
  @JoinColumn([{ name: 'NUMCONTRATO', referencedColumnName: 'numcontrato' }])
  numcontrato: TcsconEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tapmrms)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TcsprjEntity, (tcsprjEntity) => tcsprjEntity.tapmrms)
  @JoinColumn([{ name: 'CODPROJ', referencedColumnName: 'codproj' }])
  codproj: TcsprjEntity;
}
