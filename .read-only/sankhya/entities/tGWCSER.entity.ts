import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';
import { TgwconEntity } from './tGWCON.entity';

@Index('PK_TGWCSER', ['nuconferencia', 'codprod', 'controle', 'nroserie'], {
  unique: true,
})
@Entity('TGWCSER', { schema: 'SANKHYA' })
export class TgwcserEntity {
  @Column('int', { primary: true, name: 'NUCONFERENCIA' })
  nuconferencia: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('char', {
    primary: true,
    name: 'CONTROLE',
    length: 11,
    default: () => "' '",
  })
  controle: string;

  @Column('varchar', { primary: true, name: 'NROSERIE', length: 100 })
  nroserie: string;

  @Column('char', { name: 'TIPO_LEITURA', nullable: true, length: 1 })
  tipoLeitura: string | null;

  @Column('char', { name: 'AVARIA', nullable: true, length: 1 })
  avaria: string | null;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgwcsers)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TgwconEntity, (tgwconEntity) => tgwconEntity.tgwcsers)
  @JoinColumn([
    { name: 'NUCONFERENCIA', referencedColumnName: 'nuconferencia' },
  ])
  nuconferencia2: TgwconEntity;
}
