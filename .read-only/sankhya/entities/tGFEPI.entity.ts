import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfempEntity } from './tGFEMP.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TGFEPI', ['codemp', 'codfuncao', 'codprod', 'codcencusinicial'], {
  unique: true,
})
@Entity('TGFEPI', { schema: 'SANKHYA' })
export class TgfepiEntity {
  @Column('smallint', { primary: true, name: 'CODEMP', default: () => '(1)' })
  codemp: number;

  @Column('smallint', { primary: true, name: 'CODFUNCAO' })
  codfuncao: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('int', { name: 'DIASVALIDADE' })
  diasvalidade: number;

  @Column('char', { name: 'EXIGEDEVOLUCAO', length: 1, default: () => "'N'" })
  exigedevolucao: string;

  @Column('int', {
    primary: true,
    name: 'CODCENCUSINICIAL',
    default: () => '(0)',
  })
  codcencusinicial: number;

  @Column('int', { name: 'CODCENCUSFINAL', default: () => '(0)' })
  codcencusfinal: number;

  @Column('varchar', { name: 'AD_NOTIFICA_VENC', nullable: true, length: 10 })
  adNotificaVenc: string | null;

  @Column('int', { name: 'AD_D_VENC_NOTIFIC', nullable: true })
  adDVencNotific: number | null;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfepis)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfepis)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;
}
