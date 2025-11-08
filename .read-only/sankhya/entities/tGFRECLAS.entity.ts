import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfempEntity } from './tGFEMP.entity';

@Index('PK_TGFRECLAS', ['seqreclas'], { unique: true })
@Entity('TGFRECLAS', { schema: 'SANKHYA' })
export class TgfreclasEntity {
  @Column('int', { primary: true, name: 'SEQRECLAS' })
  seqreclas: number;

  @Column('float', {
    name: 'QUANTIDADE',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  quantidade: number | null;

  @Column('float', { name: 'VALORCUSTO', nullable: true, precision: 53 })
  valorcusto: number | null;

  @Column('int', { name: 'NUNOTAORIG', nullable: true })
  nunotaorig: number | null;

  @Column('int', { name: 'NUNOTADEST', nullable: true })
  nunotadest: number | null;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfreclas)
  @JoinColumn([{ name: 'CODPRODORIG', referencedColumnName: 'codprod' }])
  codprodorig: TgfproEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfreclas2)
  @JoinColumn([{ name: 'CODPRODDEST', referencedColumnName: 'codprod' }])
  codproddest: TgfproEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfreclas)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TgfempEntity;
}
