import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tfps5002InfoircrEntity } from './tFPS5002_INFOIRCR.entity';

@Index('PK_TFPS5002_PREVIDCOMPL', ['cods5002Previdcompl'], { unique: true })
@Entity('TFPS5002_PREVIDCOMPL', { schema: 'SANKHYA' })
export class Tfps5002PrevidcomplEntity {
  @Column('int', { primary: true, name: 'CODS5002_PREVIDCOMPL' })
  cods5002Previdcompl: number;

  @Column('varchar', { name: 'TPPREV', nullable: true, length: 2 })
  tpprev: string | null;

  @Column('varchar', { name: 'CNPJENTIDPC', nullable: true, length: 14 })
  cnpjentidpc: string | null;

  @Column('float', { name: 'VLRDEDPC', nullable: true, precision: 53 })
  vlrdedpc: number | null;

  @Column('float', { name: 'VLRPATROCFUNP', nullable: true, precision: 53 })
  vlrpatrocfunp: number | null;

  @Column('float', { name: 'VLRPATROCFUNP13', nullable: true, precision: 53 })
  vlrpatrocfunp13: number | null;

  @Column('float', { name: 'VLRDEDPC13', nullable: true, precision: 53 })
  vlrdedpc13: number | null;

  @ManyToOne(
    () => Tfps5002InfoircrEntity,
    (tfps5002InfoircrEntity) => tfps5002InfoircrEntity.tfps5002Previdcompls,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'CODS5002_INFOIRCR', referencedColumnName: 'cods5002Infoircr' },
  ])
  cods5002Infoircr: Tfps5002InfoircrEntity;
}
