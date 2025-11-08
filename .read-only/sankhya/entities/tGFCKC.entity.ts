import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgfckiEntity } from './tGFCKI.entity';

@Index('PK_TGFCKC', ['nuckc'], { unique: true })
@Entity('TGFCKC', { schema: 'SANKHYA' })
export class TgfckcEntity {
  @Column('int', { primary: true, name: 'NUCKC' })
  nuckc: number;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @Column('smallint', { name: 'NULAYOUT', nullable: true })
  nulayout: number | null;

  @Column('int', { name: 'CODPARC', nullable: true })
  codparc: number | null;

  @Column('smallint', { name: 'CODTIPVENDA', nullable: true })
  codtipvenda: number | null;

  @Column('smallint', { name: 'CODEMP', nullable: true })
  codemp: number | null;

  @Column('smallint', { name: 'CODTIPOPER', nullable: true })
  codtipoper: number | null;

  @Column('smallint', { name: 'CODVEND', nullable: true })
  codvend: number | null;

  @Column('int', { name: 'CODCENCUS', nullable: true })
  codcencus: number | null;

  @Column('int', { name: 'CODNAT', nullable: true })
  codnat: number | null;

  @Column('varchar', { name: 'CPFCNPJADQUIRENTE', nullable: true, length: 14 })
  cpfcnpjadquirente: string | null;

  @OneToMany(() => TgfckiEntity, (tgfckiEntity) => tgfckiEntity.nuckc2)
  tgfckis: TgfckiEntity[];
}
