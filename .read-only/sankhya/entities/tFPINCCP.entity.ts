import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TFPINCCP', ['codigo'], { unique: true })
@Entity('TFPINCCP', { schema: 'SANKHYA' })
export class TfpinccpEntity {
  @Column('char', { primary: true, name: 'CODIGO', length: 2 })
  codigo: string;

  @Column('varchar', { name: 'DESCRICAO', length: 255 })
  descricao: string;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpinccps)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
