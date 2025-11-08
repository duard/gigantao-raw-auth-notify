import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfntaEntity } from './tGFNTA.entity';
import { TgfempEntity } from './tGFEMP.entity';
import { TcsprjEntity } from './tCSPRJ.entity';

@Index('PK_TGFPPT', ['codtipoper', 'sequencia'], { unique: true })
@Entity('TGFPPT', { schema: 'SANKHYA' })
export class TgfpptEntity {
  @Column('smallint', { primary: true, name: 'CODTIPOPER' })
  codtipoper: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('char', { name: 'TIPO', length: 1, default: () => "'A'" })
  tipo: string;

  @ManyToOne(() => TgfntaEntity, (tgfntaEntity) => tgfntaEntity.tgfppts)
  @JoinColumn([{ name: 'CODTAB', referencedColumnName: 'codtab' }])
  codtab: TgfntaEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfppts)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TgfempEntity;

  @ManyToOne(() => TcsprjEntity, (tcsprjEntity) => tcsprjEntity.tgfppts)
  @JoinColumn([{ name: 'CODPROJ', referencedColumnName: 'codproj' }])
  codproj: TcsprjEntity;
}
