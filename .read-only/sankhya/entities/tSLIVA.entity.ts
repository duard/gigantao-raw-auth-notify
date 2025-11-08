import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TslipxEntity } from './tSLIPX.entity';

@Index('PK__TSLIVA__50D226A83854E153', ['codexec', 'tipo', 'chave'], {
  unique: true,
})
@Entity('TSLIVA', { schema: 'SANKHYA' })
export class TslivaEntity {
  @Column('int', { primary: true, name: 'CODEXEC' })
  codexec: number;

  @Column('varchar', { primary: true, name: 'TIPO', length: 30 })
  tipo: string;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 30 })
  chave: string;

  @ManyToOne(() => TslipxEntity, (tslipxEntity) => tslipxEntity.tslivas, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODEXEC', referencedColumnName: 'codexec' }])
  codexec2: TslipxEntity;
}
