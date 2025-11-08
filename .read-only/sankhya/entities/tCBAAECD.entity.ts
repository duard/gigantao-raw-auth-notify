import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcbempEntity } from './tCBEMP.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TCBDAAECD', ['codemp', 'tipodoc'], { unique: true })
@Entity('TCBAAECD', { schema: 'SANKHYA' })
export class TcbaaecdEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('varchar', { primary: true, name: 'TIPODOC', length: 3 })
  tipodoc: string;

  @Column('varchar', { name: 'DESCRICAO', length: 255 })
  descricao: string;

  @Column('varchar', { name: 'CAMINHOARQUIVO', length: 255 })
  caminhoarquivo: string;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('varchar', { name: 'NOMEARQUIVOSKW', nullable: true, length: 255 })
  nomearquivoskw: string | null;

  @ManyToOne(() => TcbempEntity, (tcbempEntity) => tcbempEntity.tcbaaecds)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TcbempEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcbaaecds)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
