import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgacujEntity } from './tGACUJ.entity';

@Index('PK_TGADIJ', ['codprod', 'codcultura', 'coddiagnostico'], {
  unique: true,
})
@Entity('TGADIJ', { schema: 'SANKHYA' })
export class TgadijEntity {
  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('int', { primary: true, name: 'CODCULTURA' })
  codcultura: number;

  @Column('int', { primary: true, name: 'CODDIAGNOSTICO' })
  coddiagnostico: number;

  @Column('varchar', { name: 'NOME', length: 50 })
  nome: string;

  @Column('varchar', { name: 'PADRAO', nullable: true, length: 1 })
  padrao: string | null;

  @Column('varchar', { name: 'TIPO', nullable: true, length: 1 })
  tipo: string | null;

  @ManyToOne(() => TgacujEntity, (tgacujEntity) => tgacujEntity.tgadijs)
  @JoinColumn([
    { name: 'CODPROD', referencedColumnName: 'codprod' },
    { name: 'CODCULTURA', referencedColumnName: 'codcultura' },
  ])
  tgacuj: TgacujEntity;
}
