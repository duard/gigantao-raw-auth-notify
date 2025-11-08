import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcstfuEntity } from './tCSTFU.entity';
import { TcsmodEntity } from './tCSMOD.entity';

@Index('PK_TCSMFU', ['codmetod', 'nummodelo', 'codtipfuncao'], { unique: true })
@Entity('TCSMFU', { schema: 'SANKHYA' })
export class TcsmfuEntity {
  @Column('smallint', { primary: true, name: 'CODMETOD' })
  codmetod: number;

  @Column('int', { primary: true, name: 'NUMMODELO' })
  nummodelo: number;

  @Column('smallint', { primary: true, name: 'CODTIPFUNCAO' })
  codtipfuncao: number;

  @ManyToOne(() => TcstfuEntity, (tcstfuEntity) => tcstfuEntity.tcsmfus)
  @JoinColumn([{ name: 'CODTIPFUNCAO', referencedColumnName: 'codtipfuncao' }])
  codtipfuncao2: TcstfuEntity;

  @ManyToOne(() => TcsmodEntity, (tcsmodEntity) => tcsmodEntity.tcsmfus)
  @JoinColumn([
    { name: 'CODMETOD', referencedColumnName: 'codmetod' },
    { name: 'NUMMODELO', referencedColumnName: 'nummodelo' },
  ])
  tcsmod: TcsmodEntity;
}
