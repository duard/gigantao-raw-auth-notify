import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TcsconEntity } from './tCSCON.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TapfrmEntity } from './tAPFRM.entity';
import { TapiftEntity } from './tAPIFT.entity';

@Index('PK_TAPFAT', ['nufat'], { unique: true })
@Entity('TAPFAT', { schema: 'SANKHYA' })
export class TapfatEntity {
  @Column('int', { primary: true, name: 'NUFAT' })
  nufat: number;

  @Column('datetime', { name: 'DHMOV', nullable: true })
  dhmov: Date | null;

  @Column('datetime', { name: 'DTINICIAL', nullable: true })
  dtinicial: Date | null;

  @Column('datetime', { name: 'DTFINAL', nullable: true })
  dtfinal: Date | null;

  @ManyToOne(() => TcsconEntity, (tcsconEntity) => tcsconEntity.tapfats)
  @JoinColumn([{ name: 'NUMCONTRATO', referencedColumnName: 'numcontrato' }])
  numcontrato: TcsconEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tapfats)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @OneToMany(() => TapfrmEntity, (tapfrmEntity) => tapfrmEntity.nufat2)
  tapfrms: TapfrmEntity[];

  @OneToMany(() => TapiftEntity, (tapiftEntity) => tapiftEntity.nufat2)
  tapifts: TapiftEntity[];
}
