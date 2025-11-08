import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgpcabEntity } from './tGPCAB.entity';
import { TgfetaEntity } from './tGFETA.entity';

@Index('PK_TGPFLU', ['codproc', 'sequencia'], { unique: true })
@Index('TGPFLU_I01', ['codproc', 'codetapaorig', 'codetapadest'], {
  unique: true,
})
@Entity('TGPFLU', { schema: 'SANKHYA' })
export class TgpfluEntity {
  @Column('int', { primary: true, name: 'CODPROC' })
  codproc: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { name: 'CODETAPAORIG' })
  codetapaorig: number;

  @Column('int', { name: 'CODETAPADEST' })
  codetapadest: number;

  @Column('char', { name: 'OBRIGATORIA', length: 1, default: () => "'N'" })
  obrigatoria: string;

  @Column('char', { name: 'EXIGFIMETAPAANT', length: 1, default: () => "'N'" })
  exigfimetapaant: string;

  @Column('datetime', { name: 'DTALTER' })
  dtalter: Date;

  @Column('text', { name: 'OBSERVACAO', nullable: true })
  observacao: string | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgpflus)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgpcabEntity, (tgpcabEntity) => tgpcabEntity.tgpflus, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODPROC', referencedColumnName: 'codproc' }])
  codproc2: TgpcabEntity;

  @ManyToOne(() => TgfetaEntity, (tgfetaEntity) => tgfetaEntity.tgpflus)
  @JoinColumn([{ name: 'CODETAPADEST', referencedColumnName: 'codetapa' }])
  codetapadest2: TgfetaEntity;

  @ManyToOne(() => TgfetaEntity, (tgfetaEntity) => tgfetaEntity.tgpflus2)
  @JoinColumn([{ name: 'CODETAPAORIG', referencedColumnName: 'codetapa' }])
  codetapaorig2: TgfetaEntity;
}
