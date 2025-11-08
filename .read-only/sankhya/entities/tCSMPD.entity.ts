import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcsmodEntity } from './tCSMOD.entity';

@Index('PK_TCSMPD', ['codmetod', 'nummodelo', 'nummodelopred'], {
  unique: true,
})
@Entity('TCSMPD', { schema: 'SANKHYA' })
export class TcsmpdEntity {
  @Column('smallint', { primary: true, name: 'CODMETOD' })
  codmetod: number;

  @Column('int', { primary: true, name: 'NUMMODELO' })
  nummodelo: number;

  @Column('int', { primary: true, name: 'NUMMODELOPRED' })
  nummodelopred: number;

  @Column('varchar', { name: 'TIPO', length: 2, default: () => "'TI'" })
  tipo: string;

  @ManyToOne(() => TcsmodEntity, (tcsmodEntity) => tcsmodEntity.tcsmpds)
  @JoinColumn([
    { name: 'CODMETOD', referencedColumnName: 'codmetod' },
    { name: 'NUMMODELO', referencedColumnName: 'nummodelo' },
  ])
  tcsmod: TcsmodEntity;

  @ManyToOne(() => TcsmodEntity, (tcsmodEntity) => tcsmodEntity.tcsmpds2)
  @JoinColumn([
    { name: 'CODMETOD', referencedColumnName: 'codmetod' },
    { name: 'NUMMODELOPRED', referencedColumnName: 'nummodelo' },
  ])
  tcsmod2: TcsmodEntity;
}
